import { useState, useCallback, useEffect } from "react";
import ImagePreview from "./ImagePreview";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, scaleUp } from "../styles/animations";
import { FiUpload, FiDownload } from "react-icons/fi";
import { toast } from "react-hot-toast";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

const UploadSection = () => {
  const [originalImage, setOriginalImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState(null);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload({ target: { files: [e.dataTransfer.files[0]] } });
    }
  
  }, []);

  const handleImageUpload = useCallback(async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;
  
      if (!ALLOWED_TYPES.includes(file.type)) {
        toast.error("Invalid file type. Please upload a JPEG, PNG, or WebP image.");
        return;
      }
  
      if (file.size > MAX_FILE_SIZE) {
        toast.error("File too large. Maximum size is 5MB.");
        return;
      }
  
      // Create a URL for the preview image
      const reader = new FileReader();
      
      // Move the API simulation inside onloadend
      reader.onloadend = () => {
        const imageResult = reader.result;
        setOriginalImage(imageResult);
        setLoading(true);
        
        console.log('Image loaded:', imageResult); // Debug log
        
        // Simulate API call
        setTimeout(() => {
          setEnhancedImage(imageResult);
          setLoading(false);
          toast.success("Image enhanced successfully!");
        }, 2000);
      };
  
      reader.onerror = () => {
        toast.error("Failed to read image file");
        setError("Failed to read image file");
        setLoading(false);
      };
       
      reader.readAsDataURL(file);
  
    } catch (err) {
      toast.error("Failed to process image. Please try again.");
      setError(err.message);
      setLoading(false);
    }
  }, []);
  
// Add cleanup function using useEffect
useEffect(() => {
  return () => {
    // Cleanup URLs when component unmounts
    if (originalImage) {
      URL.revokeObjectURL(originalImage);
    }
    if (enhancedImage) {
      URL.revokeObjectURL(enhancedImage);
    }
  };
}, [originalImage, enhancedImage]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="flex my-8 flex-col items-center p-8 space-y-6 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl shadow-lg w-full max-w-6xl mx-auto"
    >
      <div className="text-center space-y-2 mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Enhance Your Images
        </h2>
        <p className="text-gray-600">
          Upload your image and let AI do the magic
        </p>
      </div>

      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`
          w-full max-w-xl p-8 rounded-xl text-center
          ${dragActive 
            ? "bg-blue-50 border-2 border-blue-500" 
            : "bg-white border-2 border-dashed border-gray-300"}
          transition-all duration-200 ease-in-out
        `}
      >
        <input
          type="file"
          accept={ALLOWED_TYPES.join(",")}
          onChange={handleImageUpload}
          disabled={loading}
          className="hidden"
          id="image-upload"
        />
        <label
          htmlFor="image-upload"
          className="cursor-pointer flex flex-col items-center space-y-4"
        >
          <FiUpload className="w-12 h-12 text-gray-400" />
          <div className="space-y-2">
            <p className="text-gray-700 font-medium">
              Drop your image here, or click to browse
            </p>
            <p className="text-sm text-gray-500">
              Supports: JPG, PNG, WebP (max 5MB)
            </p>
          </div>
        </label>
      </div>

      {loading && (
        <motion.div
          variants={scaleUp}
          className="w-full max-w-xl bg-white p-4 rounded-lg shadow-md"
        >
          <div className="flex items-center justify-center space-x-3">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-500" />
            <p className="text-gray-600">Enhancing your image...</p>
          </div>
        </motion.div>
      )}

<AnimatePresence>
  {(originalImage || enhancedImage) && (
    <motion.div
      variants={scaleUp}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-xl shadow-lg"
    >
      {originalImage && (
        <div className="flex flex-col gap-4">
          <ImagePreview 
            img={originalImage} 
            label="Original Image" 
          />
        </div>
      )}
      {enhancedImage && (
        <div className="flex flex-col gap-4">
          <ImagePreview 
            img={enhancedImage} 
            label="Enhanced Image" 
          />
        </div>
      )}
    </motion.div>
  )}
</AnimatePresence>

      {enhancedImage && (
        <motion.button
          variants={fadeIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {/* Add download logic */}}
          className="cursor-pointer flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
        >
          <FiDownload className="w-5 h-5" />
          <span>Download Enhanced Image</span>
        </motion.button>
      )}
    </motion.div>
  );
};

export default UploadSection;