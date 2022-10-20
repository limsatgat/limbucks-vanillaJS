
// -- CREATE --
// []  메뉴의 이름을 입력받고 확인버튼을 누르면 추가된다.
// []  메뉴를 확인 버튼 또는 엔터키 입력으로 추가한다.
// []  추가되는 메뉴의 아래 마크업은 <ul id="espresso-menu-list" class="mt-3 pl-0"></ul> 안에 삽입해야 한다.
// []  총 메뉴 갯수를 count하여 상단에 보여준다.
// []  메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
// []  사용자 입력값이 빈 값이라면 추가되지 않는다.

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

function App() {
    // form 태그 이벤트 막기

    // 메뉴의 이름을 입력받기
    document.querySelector("#espresso-menu-name").addEventListener("keypress",(e) => {
        console.log(e.key);
        if(e.key === 'Enter'){
            console.log(document.querySelector("espresso-menu-name").value);
        }
    });
}

App();