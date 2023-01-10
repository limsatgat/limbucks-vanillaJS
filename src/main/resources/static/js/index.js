const $ = (selectors) => document.querySelector(selectors);

function App() {
// -- CREATE --
    const emptyCheck = () => {
        if ($('#espresso-menu-name').value === '') {
            alert('추가할 메뉴를 입력해주세요.');
            return;
        }
    }
    const updateMenu = () => {
        const coffeeName = $('#espresso-menu-name').value;
        const addCoffee = (coffeeName) => {
            return `<li class="menu-list-item d-flex items-center py-2">
                <span class="w-100 pl-2 menu-name">${coffeeName}</span>
                <button type="button" class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button">수정</button>
                <button type="button" class="bg-gray-50 text-gray-500 text-sm menu-remove-button">삭제</button></li>`
        };
        $('#espresso-menu-list').insertAdjacentHTML('beforeend', addCoffee(coffeeName));
        // []  메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
        $('#espresso-menu-name').value = '';
        // []  총 메뉴 갯수를 count하여 상단에 보여준다.
        const menuCnt = $('#espresso-menu-list').querySelectorAll('li').length;
        $('.menu-count').innerText = `총 ${menuCnt}개`;
    }
    $('#espresso-menu-form').addEventListener('submit', (e) => {
        e.preventDefault();
    })
    $('#espresso-menu-name').addEventListener('keypress', (e) => {
        if ($('#espresso-menu-name').value === '') {
            alert('추가할 메뉴를 입력해주세요.');
            return;
        }
        if (e.key === 'Enter'){
            updateMenu();
        };
    })
    $('#espresso-menu-submit-button').addEventListener('click', () => {
        if ($('#espresso-menu-name').value === '') {
            alert('추가할 메뉴를 입력해주세요.');
            return;
        }
        updateMenu();
    })

// -- UPDATE --
// []  메뉴의 수정 버튼을 누르면 이벤트가 발생하여, 메뉴 수정하는 모달창이 출력
    $('#menu-edit-button').addEventListener('click', (e) => {

    })
// []  모달창에서 신규 메뉴명을 입력받고, 확인을 누르면 수정이 된다.
// []  메뉴 수정시 브라우저에서 제공하는 prompt 인터페이스를 활용한다.
// []  총 메뉴 갯수를 count하여 상단에 보여준다.

// -- DELETE --
// []  메뉴 삭제 버튼을 이벤트가 발생하고,
// []  메뉴 삭제시 브라우저에서 제공하는 confirm 인터페이스를 활용한다.
// []  확인 버튼을 누르면 메뉴를 삭제된다.
// []  총 메뉴 갯수를 count하여 상단에 보여준다.
}

App();