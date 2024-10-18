"use strict";
//* Перечисление с названием TypesOfMedia, которое включает строчные типы video, audio
var TypesOfMedia;
(function (TypesOfMedia) {
    TypesOfMedia["audio"] = "audio";
    TypesOfMedia["video"] = "video";
})(TypesOfMedia || (TypesOfMedia = {}));
//* Перечисление с названием FormatsOfMedia, которое включает строчные видео-форматы: .mp4, .mov, .mkv, .flv, .webM
var FormatsOfMedia;
(function (FormatsOfMedia) {
    FormatsOfMedia["mp4"] = ".mp4";
    FormatsOfMedia["mov"] = ".mov";
    FormatsOfMedia["mkv"] = ".mkv";
    FormatsOfMedia["flv"] = ".flv";
    FormatsOfMedia["webM"] = ".webM";
})(FormatsOfMedia || (FormatsOfMedia = {}));
function playMedia({ name, type, format, subtitles, marks } = {
    name: "example",
    type: TypesOfMedia.video,
    format: FormatsOfMedia.webM,
}) {
    let marksLog;
    if (Array.isArray(marks)) {
        marksLog = marks.join(', ');
    }
    else if (typeof marks === 'string') {
        marksLog = marks;
    }
    else {
        marksLog = "Unsupported type of marks";
    }
    console.log(`Media: ${name}
    Format: ${format} is ${type}
    Marks: ${marksLog !== null && marksLog !== void 0 ? marksLog : ''}
    Subtitles: ${subtitles !== null && subtitles !== void 0 ? subtitles : "none"}`);
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
