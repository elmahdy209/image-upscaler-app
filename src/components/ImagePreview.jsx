import { motion } from "framer-motion";
import PropTypes from "prop-types";

const ImagePreview = ({ img, label }) => {
  return (
    <motion.div 
      className="flex flex-col gap-2"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="relative w-full h-[300px] rounded-lg overflow-hidden bg-gray-50"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img
          src={img}
          alt={label}
          className="w-full h-full object-contain rounded-lg"
          style={{ maxHeight: '100%', maxWidth: '100%' }}
          onError={(e) => {
            console.error('Image load error:', e);
            e.target.style.display = 'none';
          }}
        />
      </motion.div>
      <p className="text-center font-medium text-gray-700">{label}</p>
    </motion.div>
  );
};

ImagePreview.propTypes = {
  img: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default ImagePreview;