enum TransferStatus {
	Pending = "pending",
	Rejected = "rejected",
	Completed = "completed",
}

enum ErrorMessages {
	NotFound = "Not found: 404",
	NotEnoughSpace = "Not enough space: 507",
	Forbidden = "Forbidden: 403",
}

interface ITransfer {
	path: string;
	data: string[];
	date?: Date;
	start: (p: string, d: string[]) => string;
	stop: (reason: string) => string;
}

interface ITransferError {
	message: ErrorMessages;
}

// Класс должен имплементировать ITransfer и TransferError
class SingleFileTransfer implements ITransfer, ITransferError {
	path: string;
	data: string[];
	date?: Date;
	message: ErrorMessages;
	constructor ( path: string, data: string[],  message: ErrorMessages, date?: Date )
	{
		this.path = path;
		this.data = data;
		this.date = date;
		this.message = message;
	}
	start( p: string, d: string[] ): string
	{
		if(this.stop) return this.stop('rejected test')
		return p + d
	}
	stop ( reason: string ): string
	{
		return `Reason: ${reason}. Date: ${new Date().toTimeString()}`
	}
	checkTransferStatus ( data: string ): TransferStatus | undefined
	{
		if ( data.toLocaleLowerCase().includes( "pending" ) ) return TransferStatus.Pending
		if ( data.toLocaleLowerCase().includes( "rejected" ) ) return TransferStatus.Rejected
		if ( data.toLocaleLowerCase().includes( "completed")) return TransferStatus.Completed
	}
	test (status: string)
	{
		return ``
	}
}
    // Необходимо создать метод checkTransferStatus, проверяющий состояние передачи данных
    // Можно вывести в консоль данные, можно вернуть строку

    // Необходимо создать метод, который будет останавливать передачу данных
    // И возвращать строку с причиной и датой остановки (Дата в любом формате)

    // Необходимо создать метод, который будет возвращать строку, содержащую
    // Статус передачи и любое сообщение об ошибке. На ваш выбор или отталкиваться от приходящего аргумента
// Метод может показаться странным, но может использоваться для тестов, например
