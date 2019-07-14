/* eslint-env jquery */
// 主留言 html
function getMainPost(nickname, content, id, time) {
  const mainPost = `<div class='post'>
      <input type='hidden' name='parentID' value='0' >
      <div class='post__nickname'>${nickname}</div>
      <div class='post__date'> ${time} </div>
      <div class='post__content'>${content}</div>
      
      <div class='post__func'>
        <a href='update_post.php?id=${id}' class='btn' data-id='${id}'>Edit</a>
        <button class='btn btn-delete' data-id='${id}'>Delete</button>
      </div>
      
      <div class='sub-posts'>
        <form method='POST' class='sub-message'>
          <input type='hidden' value='${id}' name='parentID'>
          <div class='message-tx'>Responses</div>
          <textarea name='content' id='message__box' cols='30' rows='4' placeholder='leave a comment'></textarea>
          <input type='submit' value='Send' class='btn btn-add'>
        </form>
      </div>

    </div>`;

  return mainPost;
}

// 子留言 HTML
function getSubPost(nickname, content, id, parentID, time) {
  const subPost = `
    <div class='sub-post active'>
    <input type='hidden' name='parentID' value='${parentID}' >
    <div class='post__nickname'>${nickname}</div>
    <div class='post__date'> ${time} </div>
    <div class='post__content'>${content}</div>

    <div class='post__func'>
      <a href='update_post.php?id=${id}' class='btn' data-id='${id}'>Edit</a>
      <button class='btn btn-delete' data-id='${id}'>Delete</button>
    </div>
  `;
  return subPost;
}


$(document).ready(() => {
  // 刪除按鈕 Ajax
  $('.posts').on('click', '.btn-delete', (e) => {
    // eslint-disable-next-line no-restricted-globals
    if (!confirm('是否確定要刪除？')) return;
    const id = $(e.target).attr('data-id');

    $.ajax({
      method: 'POST',
      url: 'handle_delete_post.php',
      data: {
        // ES6 如果 Key 和 Value 一樣，就不用特別傳值
        id,
      },
    }).done((response) => {
      const msg = JSON.parse(response);
      $(e.target).parent().parent().fadeOut(300);
      alert(msg.message);
    }).fail(() => {
      alert('刪除失敗');
    });
  });

  $('.main').on('click', '.btn-add', (e) => {
    e.preventDefault();
    const content = $(e.target).parent().find('textarea[name="content"]').val();
    const parentID = $(e.target).parent().find('input[name="parentID"]').val();
    const subForm = $(e.target).closest('form');

    if (content === '') {
      alert('Please leave a comment');
    } else {
      $.ajax({
        method: 'POST',
        url: 'handle_add_post.php',
        data: {
          content,
          parentID,
        },
      }).done((response) => {
        $('.message #message__box').val('');
        const msg = JSON.parse(response);
        // ES6 寫法
        const [nickname, id, time] = [msg.nickname, msg.id, msg.time];
        alert(msg.result);

        // 判斷是否為主留言
        if (parentID === '0') {
          $('.posts').prepend(getMainPost(nickname, content, id, time));
        } else {
          $('.sub-message #message__box').val('');
          subForm.before(getSubPost(nickname, content, id, parentID, time));
        }
      }).fail((response) => {
        const msg = JSON.parse(response);
        alert(msg.result);
      });
    }
  });
});
