function Technologies({ title, techs }) {
  return (
    <div>
      <p className="mb-2">{title}</p>
      <ul className="flex flex-wrap gap-2 pl-2">
        {techs.map((tech) => (
          <li
            key={tech}
            className="bg-primary-100 text-primary-600 rounded-lg px-2 py-1"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Technologies;
