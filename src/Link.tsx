export default function Link({ name, url }: { name: string; url: string }) {
  return (
    <a href={`${url}`} target="_blank">
      {name}
    </a>
  );
}
