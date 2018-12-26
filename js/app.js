

const inputs = document.querySelectorAll('.controls input');

function updateChange() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
};

inputs.forEach(input => input.addEventListener('change', updateChange));
inputs.forEach(input => input.addEventListener('mousemove', updateChange));