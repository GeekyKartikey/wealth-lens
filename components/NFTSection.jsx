import Image from "next/image";

export default function NFTSection({ nfts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {nfts.map((nft) => (
        <div
          key={nft.id}
          className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center"
        >
          {/* NFT Image */}
          <div className="w-full h-48 relative mb-4">
            <Image
              src={nft.image}
              alt={nft.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          {/* NFT Info */}
          <h3 className="text-lg font-bold">{nft.name}</h3>
          <p className="text-md">{nft.value}</p>
          <p className="text-sm text-gray-400">{nft.price}</p>
        </div>
      ))}
    </div>
  );
}
