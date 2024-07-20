import { useParams } from 'react-router-dom';

export default function MovieDetailsPage() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Movie Details</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, saepe
        ratione facilis rerum velit exercitationem ad quas dolorum eaque,
        voluptatum illum iure nihil harum ipsam?
      </p>
    </div>
  );
}
