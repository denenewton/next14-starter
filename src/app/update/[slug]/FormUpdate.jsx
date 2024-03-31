"use client";

import useMovieByTitle from "@/hooks/useMovieByTItle";
import { useEffect, useState } from "react";
import useUpdate from "@/hooks/useUpdate";
import { useRouter } from "next/navigation";
import Form from "@/components/Form";

export default function FormUpdate({ slug }) {
  const { data } = useMovieByTitle(decodeURI(slug));
  const router = useRouter();
  const { updateMovie } = useUpdate();
  const [movie, setMovie] = useState();
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (data) {
      setMovie({
        title: data?.title,
        director: data?.director,
        release_date: data?.release_date,
        description: data?.description,
        url_movie: data?.url_movie,
      });
    }
  }, [data, slug]);

  const onSubimit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await updateMovie(data?.id, movie);
      if (response.errors) throw new Error(response.errors);
      router.push("/update/" + decodeURI(slug));
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-[75.5vh] p-0">
      <Form
        type="Update"
        movie={movie}
        handleSubmit={onSubimit}
        submitting={submitting}
        setMovie={setMovie}
      />
    </div>
  );
}
