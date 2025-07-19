"use client"

export default function SimpleMap() {
  const tmapKey = process.env.NEXT_PUBLIC_TMAP_KEY;
  
  if (!tmapKey) {
    return (
      <div 
        style={{
          width: "100%",
          height: "500px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#666"
        }}
      >
        T맵 API 키가 설정되지 않았습니다.
      </div>
    );
  }

  return (
    <iframe
      src={`/tmap-frame.html?appKey=${encodeURIComponent(tmapKey)}`}
      width="100%"
      height="500px"
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
      title="Tmap"
    />
  )
}
