import FormUpdate from "./FormUpdate";

export default function page({ params }) {
  return (
    <>
      <FormUpdate slug={params.slug} />
    </>
  );
}
