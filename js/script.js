const select = () => {
    const element = document.querySelector('.broadcast__select');
    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
    })
}

select();

