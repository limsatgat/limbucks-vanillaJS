const $ = (selectors) => document.querySelector(selectors);

function App() {
    // CRUD
    const emptyCheck = () => {
        if ($('#espresso-menu-name').value === '') {
            alert('추가할 메뉴를 입력해주세요.');
            return;
        }
    }

    const menuCnt = () => {
        const menuCnt = $('#espresso-menu-list').querySelectorAll('li').length;
        $('.menu-count').innerText = `총 ${menuCnt}개`;
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
        $('#espresso-menu-name').value = '';
        menuCnt();
    }
    $('#espresso-menu-form').addEventListener('submit', (e) => {
        e.preventDefault();
    });
    $('#espresso-menu-name').addEventListener('keypress', (e) => {
        if ($('#espresso-menu-name').value === '') {
            alert('추가할 메뉴를 입력해주세요.');
            return;
        }
        if (e.key === 'Enter'){
            updateMenu();
            menuCnt();
        };
    });
    $('#espresso-menu-submit-button').addEventListener('click', () => {
        if ($('#espresso-menu-name').value === '') {
            alert('추가할 메뉴를 입력해주세요.');
            return;
        }
        updateMenu();
        menuCnt();
    });

    $('#espresso-menu-list').addEventListener('click', (e) => {
        if(e.target.classList.contains('menu-edit-button')){
            const changedTarget = e.target.closest('li').querySelector('.menu-name');
            const newCoffee = prompt('변경할 메뉴명을 입력하시오', changedTarget.innerText);
            changedTarget.innerText = newCoffee;
        }
        if(e.target.classList.contains('menu-remove-button')){
            if(confirm('삭제하시겠습니까?')){
                e.target.closest('li').remove();
                menuCnt();
            }
        }
    });
    // -- CRUD END

    // 상태관리
    // [] - localStorage에 데이터를 저장한다.
    // [] - localStoragfe에 있는 데이터를 읽어온다.

    // [] - 에스프레소, 프라푸치노, 블렌디드, 티바나, 디저트 각각의 종류별로 메뉴판을 관리할 수 있게 만든다.
    // [] - 페이지에 최초로 접근할 때는 에스프레소 메뉴가 먼저 보이게 한다.
    // [] - 품절 상태인 경우를 보여줄 수 있게, 품절 버튼을 추가하고 sold-out class를 추가하여 상태를 변경한다
}



App();