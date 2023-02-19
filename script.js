"use stric";

// let ar = "word";

// let reverse = ar.split("");

// let result = [];

// for (let i = reverse.length - 1; i >= 0; i--) {
//   result.push(reverse[i]);

// }
//  console.log(result.join(''));

// Ko'rsatmalar:
// 1. “Output” nomli o‘zgaruvchi yarating va unga bo‘sh array belgilang
// 2. 1 dan boshlanib, 100 da tugaydigan for loop yarating
// 3. For loop joriy raqam 3 va 5 ga karrali ekanligini tekshirish uchun if/else iborasidan foydalaning.
// 4. Agar joriy raqam 3 va 5 ga karrali boʻlsa, “FizzBuzz” tugmasini “chiqarish” qatoriga suring.
// 5. Agar joriy raqam 3 ga karrali boʻlsa, “Fizz” tugmasini “chiqarish” qatoriga suring.
// 6. Agar joriy raqam 5 ga karrali boʻlsa, “Buzz” tugmasini “chiqarish” qatoriga bosing.
// 7. Aks holda joriy raqamni "chiqish" arrayiga suring
// 8. Hech qanday argumentni talab qilmaydigan va har bir elementni console.log uchun “output” arrayidan foydalanadigan “printOutput” funksiyasini yarating.
// 9. "printOutput" funksiyasini chaqiring

// Eslatma: Qisqa va o'qilishi mumkin bo'lgan kod uchun if/else iborasi ichida Ternary operatoridan foydalanishingiz mumkin.

let output = [];

for (let numbers = 1; numbers <= 100; numbers++) {
  if (numbers % 3 === 0 && numbers % 5 === 0) {
    output.push("FizzBuss");
  } else if (numbers % 3 === 0) {
    output.push("Fizz");
  } else if (numbers % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(numbers);
  }
}

const printOutput = () => {
  console.log(output);
};

printOutput();
