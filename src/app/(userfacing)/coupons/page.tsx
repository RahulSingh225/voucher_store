import Card from "@/app/components/Card";

export default function UserLanding() {
  return (
    <div className="h-full w-full px-4 py-6">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-6 text-center --font-geist-mono">
        HI UserLanding
      </h1>

      {/* 2 Column Grid */}
      <div className="grid grid-cols-2 ">
        {/* Render Cards */}
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <Card key={index} />
          ))}
      </div>
    </div>
  );
}
