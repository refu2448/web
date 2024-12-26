// 모달 열기
function showRules(text) {
  const modal = document.getElementById('modal');
  const modalText = document.getElementById('modal-text');

  modalText.textContent = text; // 규칙 내용을 설정
  modal.style.display = 'flex'; // 모달 표시
}

// 모달 닫기
function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none'; // 모달 숨기기
}

// 모달 외부 클릭 시 닫기
window.onclick = function (event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
