import PropTypes from "prop-types"
import { useEffect } from "react"
import { Copy } from '../../utils/constants'

const Drop = ({ children, onDataDrop }) => {

  useEffect(() => {
    document.addEventListener('ondragover', preventDefaultDragOver)
    document.addEventListener('ondrop', preventDefaultDrop)
    return () => {
      document.removeEventListener('ondragover', preventDefaultDragOver)
      document.removeEventListener('ondrop', preventDefaultDrop)
    }
  })

  const preventDefaultDragOver = (e) => {
    e.preventDefault();
  }

  const preventDefaultDrop = (e) => {
    e.preventDefault();
  }

  const handleDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = Copy
  }

  const handleDrop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    onDataDrop && onDataDrop(e.dataTransfer.files[0])
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {children}
    </div>
  )
}

Drop.propType = {
  children: PropTypes.object.isRequired,
  onDataDrop: PropTypes.fn
}

export default Drop;