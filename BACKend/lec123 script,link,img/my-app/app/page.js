import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center my-10 bg-slate-900 relative size-100">
      I am home 
      <Image
      className="object-cover"
      src="https://i.pinimg.com/736x/05/6c/c5/056cc54173abc58389ecd0173ed89a8f.jpg"
      alt="Picture of the author"
      fill={true}
    />
 </div>
  );
}
