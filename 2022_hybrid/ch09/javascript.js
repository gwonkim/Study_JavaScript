function init() {
    msg1();
}		
function msg1() {
    alert('msg1():문서로드후 자동으로 경고창을 표시합니다.');
}			
function msg2() {
    document.getElementById('id2').innerHTML = '<div style="background: silver">msg2(): HTML5 문서 변경 되었습니다.</div>';
}