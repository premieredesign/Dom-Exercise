window.onload = () => {
 
    document.addEventListener('mousemove', (e) => {
        const circle = document.querySelector('.circle');
        const body = document.querySelector('body');
        circle.style.left = `${e.x}px`;
        circle.style.top = `${e.y}px`;
        const el = document.createElement('div');
        el.classList.add('circle');
        const recursive = (idx) => {
            if (idx === 1) return;
            el.style.backgroundColor = 'orange'
            el.style.left = `${e.x + 1}px`;
            el.style.top = `${e.y + 1}px`;
            body.append(el);
            return recursive(idx + 1);
        }
        return recursive(0);
    })
}