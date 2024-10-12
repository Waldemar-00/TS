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
function playMedia(_a) {
    var _b = _a === void 0 ? {
        name: "example",
        type: TypesOfMedia.video,
        format: FormatsOfMedia.webM,
    } : _a, name = _b.name, type = _b.type, format = _b.format, subtitles = _b.subtitles, marks = _b.marks;
    var marksLog;
    if (Array.isArray(marks)) {
        marksLog = marks.join(', ');
    }
    else if (typeof marks === 'string') {
        marksLog = marks;
    }
    else {
        marksLog = "Unsupported type of marks";
    }
    console.log("Media: ".concat(name, "\n    Format: ").concat(format, " is ").concat(type, "\n    Marks: ").concat(marksLog !== null && marksLog !== void 0 ? marksLog : '', "\n    Subtitles: ").concat(subtitles !== null && subtitles !== void 0 ? subtitles : "none"));
    return "Media started";
}
var statusMedia = playMedia({
    name: "WoW",
    format: FormatsOfMedia.webM,
    type: TypesOfMedia.video,
    subtitles: "hmhmhm hmhmhm doh",
    marks: ["4:30", "5:40"],
});
console.log(statusMedia);
