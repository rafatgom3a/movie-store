import { useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Movie Details</h1>
      <p className="mt-2">Movie ID: {id}</p>
    </div>
  );
}
