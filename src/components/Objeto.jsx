export default function Objeto({ objeto }) {
  return (
    <img style={{ top: `${objeto.relativeOffsetY * 100}%`, left: `${objeto.relativeOffsetX * 100}%` }} className={`absolute`} src={`/src/data/objetos/${objeto.file}`} />
  )
}