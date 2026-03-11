const CustomDot = ({ onClick, active }) => {
    return (
      <button
        onClick={onClick}
        style={{
          width: active ? 14 : 10,
          height: active ? 14 : 10,
          borderRadius: "50%",
          margin: " 6px",
          border: "none",
          backgroundColor: active ? "#DBCE41" : "#ddd",
          transition: "all 0.3s ease",
          transform: active ? "scale(1.2)" : "scale(1)",
          cursor: "pointer",
        }}
      />
    );
  };
  
export default CustomDot;