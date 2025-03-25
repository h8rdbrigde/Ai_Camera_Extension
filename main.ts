
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

    //% block="Kiểm tra kết quả AI nhận dạng nhãn %label với độ tin cậy >= %confidence" weight=70
    export function checkRecognition(label: string, confidence: number): boolean {
        let result = serial.readUntil(serial.delimiters(Delimiters.NewLine));
        let confidenceValue = parseFloat(result.split(",")[1]);
        let labelDetected = result.split(",")[0];
        return labelDetected == label && confidenceValue >= confidence;
    }

    //% block="Đọc nhãn nhận dạng" weight=60
    export function readRecognition(): string {
        let result = serial.readUntil(serial.delimiters(Delimiters.NewLine));
        return result.split(",")[0];
    }

    //% block="Đọc độ tin cậy của kết quả nhận dạng" weight=50
    export function readConfidence(): number {
        let result = serial.readUntil(serial.delimiters(Delimiters.NewLine));
        return parseFloat(result.split(",")[1]);
    }
}
