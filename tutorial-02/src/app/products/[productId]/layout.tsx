function getRandom(count: number){
  return Math.floor(Math.random() * count)
}

export default function ProductDetailsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    const random = getRandom(2);
    if (random === 1) {
      throw new Error("Error loading product");
    }
    return (
        <>
            {children}
            <h1>Features Products</h1>
        </>
    )
  }