export default function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Review for this produce {params.productId}</h1>;
}
