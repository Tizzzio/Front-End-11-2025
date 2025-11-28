function Avatar({ src, alt, size = "medium" }) {
  const sizeClass = `avatar-${size}`;
  return <img src={src} alt={alt} className={`avatar ${sizeClass}`} />;
}

export default Avatar;
