import Image from "next/image";

export default function Category() {
  const cards = [];
  const CategoryImage = '/images/category.png';
  
  for (let i = 0; i < 6; i++) {
    cards.push(
      <div
        key={i}
        className="flex flex-col items-center w-full"
      >
        <div
          className="w-full aspect-[191/201] bg-[#F3F3F3] mb-2 flex items-center justify-center"
          style={{
            borderTopLeftRadius: "113px",
            borderTopRightRadius: "113px",
          }}
        >
          <Image
            src={CategoryImage}
            alt="Category"
            width={100}
            height={100}
            className="object-contain mr-5"
          />
        </div>
        <div className="w-full h-[50px] bg-white shadow-[0_4px_13.3px_0_rgba(0,0,0,0.24)] flex items-center justify-center rounded text-[16px] font-medium">
          Product {i + 1}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 mx-[4%]">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">
          Shop By <span className="text-green-700">Category</span>
        </h1>
      </div>
      <div className="flex flex-wrap gap-6 justify-center">
        {cards.map((card, index) => (
          <div key={index} className="flex-1 min-w-[120px] max-w-[200px]">
            {card}
          </div>
        ))}
      </div>
    </div>
  );
}