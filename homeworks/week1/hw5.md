## 請解釋後端與前端的差異。
前端 (Front-end) 是軟體的視覺介面輸出，也就是看得到的一切表象，簡單來說就是使用者所接觸到的、可以觀看操作的網頁或是應用程式介面；而後端 (Back-end) 則是掌控軟體輸出的部份，主要負責商業邏輯運算，以及資料庫連結和儲存，大部份是隱藏看不到的。

前端主要是由 Html (架構)、CSS (外觀)、JavaScript (動作) 三大鐵人負責處理，也稱作客戶端。後端主要是資料庫處理，又稱為伺服器端。

換言之，可以舞台表演來想像，前端就是舞台區，搖滾歌手在台上表演、與觀眾互動、背景還有炫泡的視覺投影，總之就是包含舞台所有看得到的東西；後端就是後台的部份，技術人物在黑黑的地方操控著聲光效果、音軌的平衡輸出、影像的播放，同時也會因應現場觀眾的反應，去做燈光、節目安可的互動…等。


## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
流程：Client端 → Request → Server端 → Response → Client端

1. 在輸入關鍵字搜尋之後，瀏覽器會將搜尋的字串「JavaScript」轉成參數
2. 發送一個 Request 給 Google 伺服器，進一步做資料檢索、演算法運行…等處理
3. 伺服器會將資料結果發送 Response 回傳資料至使用者的瀏器
4. 瀏覽器再把資料轉換成使用者看到的圖形化介面   


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
1. 設定使用者名稱及電子郵件, Git 提交時就會使用這些資訊：
`git config --global user.name "Your Name"`
`git config --global user.email author@example.com`

2. 儲藏(Stashing)：建立暫存版本
狀況劇：正當手邊正在開發新功能，突然需要緊急維修正式版的 Bug，這時候可以使用
`git stash` 將開發到一半的狀態建立一個「暫存版」。(因為檔案修改到一半，都需要先 commit 才能
切換到其他 branch，但此時因為開發還沒到一個段落，不想要做 commit，因此可先存入暫存版。)
此時就可以再切回到 Master (或再開一新分支)修復 Bug，解除突發任務後，可以再透過
`git pop` 回到當時開發新功能的檔案狀態，繼續進行開發的任務。

3. 還原檔案
如果不小心改壞或刪除一個檔案，使用  `git checkout master <fileName>` 指令，就可以將單一檔案還原。  
而不必使用 `git reset --hard`，因為這會把全部刪除的檔案一起還原。
