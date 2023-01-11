const $ = (selectors) => document.querySelector(selectors);

function App() {
    // CRUD
// -- CREATE --
// []  메뉴의 이름을 입력받고 확인버튼 또는 엔터를 누르면 추가된다.
    const menuCnt = () => {
        const count = $('#espresso-menu-list').querySelectorAll('li').length;
        $('.menu-count').innerText = `총 ${count}개`;
    }

    $('#espresso-menu-form').addEventListener('submit', (e) => {
        e.preventDefault();
    });

    $('#espresso-menu-name').addEventListener('keypress', (e) => {
        if($("#espresso-menu-name").value === ''){
            alert('메뉴명을 입력해주세요');
            return;
        }
        if(e.key === 'Enter'){
       const newCoffeeName = $('#espresso-menu-name').value;
       const newCoffee = (newCoffeeName) => {
           return `<li class="menu-list-item d-flex items-center py-2">
               <span class="w-100 pl-2 menu-name">${newCoffeeName}</span>
               <button type="button" class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button">수정</button>
               <button type="button" class="bg-gray-50 text-gray-500 text-sm menu-remove-button">삭제</button>
                </li>`
       }
       $('#espresso-menu-list').insertAdjacentHTML('beforeend', newCoffee(newCoffeeName));
       $('#espresso-menu-name').value = '';
       menuCnt();
       }
    });

    $('#espresso-menu-list').addEventListener('click', (e) => {
        if(e.target.classList.contains('menu-edit-button')){
            const modifyName = e.target.closest('li').querySelector('.menu-name');
            const modify = prompt('변경할 명을 입력하시오', modifyName.innerText)
            modifyName.innerText = modify;
        }
        if(e.target.classList.contains('menu-remove-button')){
            e.target.closest('li').remove();
            confirm('삭제하시겠습니까?');
            menuCnt();
        }
    });


// -- UPDATE --
// []  메뉴의 수정 버튼을 누르면 이벤트가 발생하여, 메뉴 수정하는 모달창이 출력
// []  모달창에서 메뉴 이름을 입력받고, 확인을 누르면 수정이 된다.
// []  메뉴 수정시 브라우저에서 제공하는 prompt 인터페이스를 활용한다.
// []  총 메뉴 갯수를 count하여 상단에 보여준다.

// -- DELETE --
// []  메뉴 삭제 버튼을 이벤트가 발생하고,
// []  메뉴 삭제시 브라우저에서 제공하는 confirm 인터페이스를 활용한다.
// []  확인 버튼을 누르면 메뉴를 삭제된다.
// []  총 메뉴 갯수를 count하여 상단에 보여준다.
    // -- CRUD END

    // 상태관리
    // [] - localStorage에 데이터를 저장한다.
    // [] - localStoragfe에 있는 데이터를 읽어온다.

    // [] - 에스프레소, 프라푸치노, 블렌디드, 티바나, 디저트 각각의 종류별로 메뉴판을 관리할 수 있게 만든다.
    // [] - 페이지에 최초로 접근할 때는 에스프레소 메뉴가 먼저 보이게 한다.
    // [] - 품절 상태인 경우를 보여줄 수 있게, 품절 버튼을 추가하고 sold-out class를 추가하여 상태를 변경한다
}



App();