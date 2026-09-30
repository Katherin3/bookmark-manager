export function getDomain(value) {
    try {
        const parsed = new URL(value);


        if(parsed.protocol === "http:" || parsed.protocol === "https:") {
            return parsed.hostname;
        }

    } catch {
        // არავალიდურ მისამართზე new URL() შეცდომას აგდებს.
        // ბარათი ამის გამო არ უნდა ჩავარდეს — დააბრუნე თავად ტექსტი
        return value;
    }
}

export function getName(value) {
    // ზემოთა ფუნქციას იყენებ და არა value-ს პირველ ასოს:
    // "https://react.dev"-ის პირველი ასო "h" იქნებოდა
    const hostname = getDomain(value);

    // ?? — თუ hostname ცარიელია, სიმბოლო მაინც გვჭირდება
    return (hostname[0] ?? "No URL").toUpperCase();
}