<?php
  include_once('check_login.php');
  require_once('conn.php');
  require_once('utils.php');

  // 驗證資料是否為空
  if (
    isset($_POST['content']) && 
    !empty($_POST['content'])
  ) {
    $content = $_POST['content'];
    $parentID = $_POST['parentID'];
    
    //寫入資料 
    //$sql = "INSERT INTO potatokaka_comments(content, username) VALUES('$content', '$user')";
    $sql = "INSERT INTO potatokaka_comments(content, username, parentID) VALUES(?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssi", $content, $user, $parentID);
 
    if ($stmt->execute()) {
      $last_id = $stmt->insert_id;

      // 去抓留言建立的時間，不知道有沒有更容易的作法？
      $stmt = $conn->prepare("SELECT * FROM potatokaka_comments WHERE id = ?");
      $stmt->bind_param("i", $last_id);
      $stmt->execute();
      $result = $stmt->get_result();
      $row = $result->fetch_assoc();
      $time = $row['created_at'];

      $arr = array(
        'result' => '新增成功', 
        'id' => $last_id, 
        'nickname' => $nickname,
        'time' => $time,
      );
      echo json_encode($arr);

      // header('Location: ./index.php');
    } else {
      echo json_encode(array(
        'result' => 'failure',
        'message' => '新增失敗'
      ));

      //printMessage($conn->error, './index.php');
    }
  
  } else {
    printMessage('請輸入內容', './index.php');
  }


?>

