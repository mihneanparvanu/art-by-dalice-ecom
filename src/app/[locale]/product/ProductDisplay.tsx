export default function ProductDisplay({img_URL}: {img_URL?: string}) {
  return (
    <div className="bg-surface-primary md:w-[50%] md:h-[100vh] p-10">
      <img
        src={img_URL}
        alt=""
        width={500}
        height={500}
        className="object-contain h-full w-full"
      />
    </div>
  );
}
