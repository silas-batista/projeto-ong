export function validateForm() {
    const form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        const cpf = form.querySelector('input[name="cpf"]');
        const telefone = form.querySelector('input[name="telefone"]');
        const cep = form.querySelector('input[name="cep"]');

        // Validação de CPF simples
        const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
        if (!cpfPattern.test(cpf.value)) {
            isValid = false;
            alert('CPF inválido. Use o formato 000.000.000-00');
        }

        // Validação de telefone
        const telPattern = /^\(\d{2}\)\s\d{5}-\d{4}$/;
        if (!telPattern.test(telefone.value)) {
            isValid = false;
            alert('Telefone inválido. Use o formato (11) 99999-9999');
        }

        // Validação CEP
        const cepPattern = /^\d{5}-\d{3}$/;
        if (!cepPattern.test(cep.value)) {
            isValid = false;
            alert('CEP inválido. Use o formato 00000-000');
        }

        if (isValid) {
            alert('Formulário enviado com sucesso!');
            form.reset();
        }
    });
}
