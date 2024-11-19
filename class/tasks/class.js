"use strict";
var TransferStatus;
(function (TransferStatus) {
    TransferStatus["Pending"] = "pending";
    TransferStatus["Rejected"] = "rejected";
    TransferStatus["Completed"] = "completed";
})(TransferStatus || (TransferStatus = {}));
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["NotFound"] = "Not found: 404";
    ErrorMessages["NotEnoughSpace"] = "Not enough space: 507";
    ErrorMessages["Forbidden"] = "Forbidden: 403";
})(ErrorMessages || (ErrorMessages = {}));
// Класс должен имплементировать ITransfer и TransferError
class SingleFileTransfer {
    constructor(path, data, message, date) {
        this.path = path;
        this.data = data;
        this.date = date;
        this.message = message;
    }
    start(p, d) {
        if (this.stop)
            return this.stop('rejected test');
        return p + d;
    }
    stop(reason) {
        return `Reason: ${reason}. Date: ${new Date().toTimeString()}`;
    }
    checkTransferStatus(data) {
        if (data.toLocaleLowerCase().includes("pending"))
            return TransferStatus.Pending;
        if (data.toLocaleLowerCase().includes("rejected"))
            return TransferStatus.Rejected;
        if (data.toLocaleLowerCase().includes("completed"))
            return TransferStatus.Completed;
    }
    test(status) {
        return ``;
    }
}
// Необходимо создать метод checkTransferStatus, проверяющий состояние передачи данных
// Можно вывести в консоль данные, можно вернуть строку
// Необходимо создать метод, который будет останавливать передачу данных
// И возвращать строку с причиной и датой остановки (Дата в любом формате)
// Необходимо создать метод, который будет возвращать строку, содержащую
// Статус передачи и любое сообщение об ошибке. На ваш выбор или отталкиваться от приходящего аргумента
// Метод может показаться странным, но может использоваться для тестов, например
