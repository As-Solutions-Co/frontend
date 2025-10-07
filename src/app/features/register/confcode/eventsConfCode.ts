import { QueryList, ElementRef } from "@angular/core";

export function handleInput(
    event: Event,
    index: number,
    inputs: QueryList<ElementRef<HTMLInputElement>>,
    otpCode: String[],
    onComplete: (filled: boolean) => void) {

    const input = event.target as HTMLInputElement;
    const value = input.value.trim();


    // Verificamos si el valor ingresado es un número (solo un dígito)
    if (/^\d$/.test(value)) {
        otpCode[index] = value;

        const next = inputs.get(index + 1)?.nativeElement;
        if (next) {
            next.focus();
        }
    } else {
        // Si el valor ingresado no es número se borra
        input.value = '';
    }


    // Si llegamos al último input verificamos si todos los campos estan llenos.
    // every() recorre cada elemento del array y verifica si todos cumplen la condición
    const allFilled = inputs.toArray().every(input => input.nativeElement.value.trim() !== '');
    onComplete(allFilled);
}

export function handleKeyDown(
    event: KeyboardEvent,
    index: number,
    inputs: QueryList<ElementRef<HTMLInputElement>>) {

    // Guardamos el (input) como un elemento html y lo guardamos en input
    const input = event.target as HTMLInputElement;

    if (event.key === 'Backspace' && !input.value && index > 0) {

        // accedemos al array de inputs que contienen #otpInput y lo guardamos como un elemento real del DOM modificable con focus() y .value gracias a nativeElement
        const prevInput = inputs.get(index - 1)?.nativeElement;
        if (prevInput) prevInput.focus();
    }
}


export function handlePaste(event: ClipboardEvent, inputs: QueryList<ElementRef<HTMLInputElement>>, otpCode: String[], onComplete: (filled: boolean) => void) {
    // Evitamos que el texto copiado no se pegue en un solo input
    event.preventDefault();

    // Si existe contenido en el portapapeles se obtiene con getData('text') devuelve en string
    // Si no existe un contenido en clipboardData o es undefined se devuelve un valor por defecto ?? '' vacio.
    const pastedData = event.clipboardData?.getData('text') ?? '';

    // Remplazamos caracteres que no sean números usando regex por una cadena vacia.
    // Con la función split() dividimos la cadena en un array de caracteres.
    const digits = pastedData.replace(/\D/g, '').split('');

    inputs.forEach((inputRef, index) => {
        const input = inputRef.nativeElement;
        const value = digits[index] || '';
        input.value = value;
        otpCode[index] = value;
    });

    const lastIndex = digits.length - 1;
    const nextInput = inputs.get(lastIndex)?.nativeElement;
    if (nextInput) nextInput.focus();

    const allFilled = inputs.toArray().every(input => input.nativeElement.value.trim() !== '');
    onComplete(allFilled)

}