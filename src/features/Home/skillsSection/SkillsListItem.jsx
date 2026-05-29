function SkillsListItem({
  skill,
  icon,
  transitionDelay,
  active,
  backgroundColor,
  textColor,
}) {
  return (
    <li>
      <div
        className={`center-all skill-inactive gap-2 rounded-full px-3 py-1 font-medium ${active && "skill-active"}`}
        style={{
          transitionDelay: `${transitionDelay}s`,
          backgroundColor: backgroundColor,
        }}
      >
        <span style={{ color: textColor }}>{skill}</span>
        <span>{icon}</span>
      </div>
    </li>
  );
}

export default SkillsListItem;
