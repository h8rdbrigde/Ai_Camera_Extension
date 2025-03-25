
//% weight=100 color=#0b5394 icon="" block="AI Camera"
namespace AICamera {
    //% block="Khởi tạo Camera AI với RX %rx TX %tx" weight=90
    export function init(rx: SerialPin, tx: SerialPin): void {
        serial.redirect(rx, tx, BaudRate.BaudRate9600);
    }

    //% block="Cập nhật dữ liệu từ Camera AI" weight=80
    export function update(): void {
        serial.writeString("update");
    }

    //% block="Kiểm tra kết quả AI" weight=70
    export function checkResult(): string {
        return serial.readUntil("\n");
    }
}
