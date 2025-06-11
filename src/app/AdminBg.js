import AdminCollection from "./components/AdminCollection";
export default function AdminBg() {
  return (
    <>
      <div className="w-full min-h-screen">
        <video
          className=" inset-0 w-full h-full object-cover fixed z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="pt-24 relative z-10 flex items-center justify-center h-full text-white text-xl font-bold">
            <AdminCollection />
        </div>
      </div>

    </>

  );
}