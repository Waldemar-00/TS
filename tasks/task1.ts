//* Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
enum TypesOfMedia {
  audio = "audio",
  video = 'video'
}
//* Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
enum FormatsOfMedia
{
  mp4 = ".mp4",
  mov = ".mov",
  mkv = ".mkv",
  flv = ".flv",
  webM = ".webM",
}
//* Описание интерфейса, в котором:
//* name - строка
//* type - один из перечисления выше
//* format = один из перечисления выше
//* subtitles - необязательное поле типа строка
//* marks - необязательное поле неизвестного типа
interface Video
{
  name: string,
  type:
  |TypesOfMedia.audio
  | TypesOfMedia.video,
  format:
  | FormatsOfMedia.mp4
  | FormatsOfMedia.mov
  | FormatsOfMedia.mkv
  | FormatsOfMedia.flv
  | FormatsOfMedia.webM,
  subtitles?: string,
  marks?:
  | string
  | (string|number)[]
}
function playMedia (
  { name, type, format, subtitles, marks }: Video = {
		name: "example",
		type: TypesOfMedia.video,
		format: FormatsOfMedia.webM,
  }
): string
{
  let marksLog: string;

  if ( Array.isArray( marks ))
  {
    marksLog = marks.join( ', ' )

  }
  else if ( typeof marks === 'string' )
  {
    marksLog = marks
  } else {
    marksLog = "Unsupported type of marks"
  }

  console.log( `Media: ${ name }
    Format: ${ format } is ${ type }
    Marks: ${marksLog ?? ''}
    Subtitles: ${subtitles ?? "none" }` );

	return "Media started";
}

const statusMedia = playMedia({
	name: "WoW",
	format: FormatsOfMedia.webM,
	type: TypesOfMedia.video,
	subtitles: "hmhmhm hmhmhm doh",
	marks: ["4:30", "5:40"],
});
console.log(statusMedia);
