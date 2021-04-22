var tipuesearch = {"pages": [{'title': '期中報告', 'text': '\n 綜一館 6F-9F 各實習實驗室的相關按鈕 \n \n \n \n 樓層 \n \xa0第一間 \n \xa0第二間 \n \xa0第三間 \n \xa0第四間 \n 第五間 \n \xa0第六間 \n \n \n 9 F \n  BGA0901 (國際會議廳)  \n \xa0  BGA0911 (機電實驗室)  \n \xa0  BGA0933 (系統晶片設計實驗室)  \n \xa0 \n \n \xa0 \n \n \n 8 F \n  BGA0810 (電腦輔助設計室) \n  BGA0820 (智慧感測與致動實驗室)  \n \n BGA0823 (新產品創意設計中心) \n \n BGA0830 (電腦輔助繪圖室) \n  BGA0842 (機械元件設計實驗室)  \n \n \n \n 7 F \n  BGA0710 (研討室(二)) \n \n BGA0730 (研討室(一))  \n \xa0 \n \n \xa0  BGA0760 (逆向快速成型實驗室)  \n \n \n 6 F \n  BGA0611 (研討室(三)) \n BGA0620 (動態系統實驗室)  \n \n  BGA0640 (創意設計室) \n \n \xa0 \n \n \n \n  程式碼:  https://github.com/40923148/nfulist \n heroku: https://s40923148.herokuapp.com/content/index.html \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  https://a40923148.herokuapp.com/ \n', 'tags': '', 'url': '期中報告.html'}, {'title': 'About', 'text': 'This is  https://github.com/mdecourse/cmstemplate \n 網際內容管理 (Web-based Content Management) \n 利用瀏覽器作為前端, 並將數位內容有系統地送到雲端伺服器中進行管理與運用的架構即稱為網際內容管理. \n 從機械設計專業的角度看待網際內容管理. \n 機械設計工程師應該從 CAD 出發透過零組件系統建立, 模擬與控制, 並在流程中利用 CAE 進行設計功能確認後, 將所有持續改進的內容透過分散式版次與網際管理系統進行保存與數位資料再利用. \n', 'tags': '', 'url': 'About.html'}, {'title': '語法', 'text': 'cms \n 老師為了同學方便把cd cmsimde\xa0 跟wsgi.py整合在一起，讓同學可以在自己的倉儲直接打開動態網頁。 \n acp \n 老師把git add .、git commit -m 、git push整合，讓同學可以直接推送，但要注意沒有把這次推送加上代號可能會出錯。 \n wsgi.py \n 打開動態網頁 \n git add\xa0. \n 找尋更新的內容 \n git commit -m \n 把更新的內容變成一個專案，記得要加上代號 \n git push \n 把全部的東西推送到遠端 \n path \n 路徑 \n dir \n 磁碟內容 \n regedit \n 登入編輯 \n git pull origin master  \n 更新到最新的資料 \n git clone (github網址).git \n 把 github倉儲複製到資料夾，以git形式 \n \n', 'tags': '', 'url': '語法.html'}, {'title': '上課內容', 'text': '', 'tags': '', 'url': '上課內容.html'}, {'title': 'w1', 'text': '還未選課沒上到課 \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '更改標題 \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '改版 \n 我上課時要改成最新版結果失敗了，詢問老師後，好像是我有弄壞一部份的靜態，需要從遠端重新抓新的下來，下課後抽時間重新抓了一次，然後又把up_dir資料夾更新，這次沒有跑一大堆錯誤出來，但我看資料夾並沒有上課所說的五個檔案，需要星期四上課再去詢問老師。 \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '成功的把上禮拜失敗的改版完成了，原因是，git pull指令無法被接受，需要指定哪個檔案(遠端的分支)。 \n 課表原始碼介紹利用和開啟各個課表的方法(更改那些變數，和必要的變數),回去用ssh跟github連線 \n 回家後測試使用SSH，結果失敗了，尋找錯誤的方法中。....... \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '今天老師上課教我們更新cmsimde，跟如何設定SSH，也讓我知道握哪裡設定錯誤，是之前的錯誤，教學完後還有太多人不懂所以我就去幫同學解決他們發生錯誤的地方 \n', 'tags': '', 'url': 'w5.html'}, {'title': 'SSH', 'text': '1.首先我們需要登入github在自己的帳號中開啟設定，在設定中尋找SSH and GPG keys ，然後先按New SSHkey做準備。 \n 2.在 start_ipv6.bat (編輯器)加入 \xa0 set GIT_SSH=%Disk%:\\putty\\plink.exe。 \n 3.開啟 Putty 目錄中的 puttygen.exe,(沒有putty從a.kmol.info:88下載)，點擊Generate下載新Key(移動滑鼠進度條才會動)，最上面出現的亂碼為新鑰匙，全選後丟進剛剛在github預備的New SSHkey(記得存)，記得用SciTE 編輯儲存鑰匙(_rsa 檔)，然後用Save private key再存一次(.ppk檔)，兩個檔案存在tmp/keys裡 \n 4.開啟 putty.exe建立一個 session用於以 ssh 協定連線到 github.com(在hostname),名稱可任意但Proxy須設定學校的(筆電不用Proxy可以選None)，Auth記得選之前儲存.ppk的檔案，最後回開頭存檔 \n 5.最後則是要修改tmp/wcm2021/.git裡面config的url(之前的可在前面加#即可)，url改成git@( session的名子) :(帳號)/(倉儲名子).git(原url下面)(是origin下面的url) \n 名子盡量相同會增加成功率，失敗就多試幾次說不定會成功 \n \n', 'tags': '', 'url': 'SSH.html'}, {'title': 'W6', 'text': '今天老師說了SSH的原理嚷我更加了解SSH的運作方式，雖然我依舊不明白相同的動作，有時候會設定成功有時候不行的原因是甚麼。 \n 還有註冊heroku跟把a.kmol.info:88的heroku.7z解壓縮到data裡面，在設定 \xa0start_ipv6.bat (編輯器)heroku的路徑，之後要教得因為時間問題延到下禮拜(Github連結heroku的方法) \n', 'tags': '', 'url': 'W6.html'}, {'title': 'w7', 'text': '開始準備期中分組報告 \n heroku連結到倉儲，需要 \n 從a.kmol.info:88下載Heroku，放到data下，再用編輯器把啟動器的Heroku路徑打上。 \n 測試是否有連接上， 輸入 heroku version，有出現版本號便成。 \n 未出現原因 \n 1.編輯器味編寫正確 \n 2.檔案不完整 \n 完成後推送方法 \n 1. heroku login  - i\xa0 ( 以 interactive 模式登入 Heroku)(記得打帳號密碼) \n 2cd到要推送得倉儲 \n 3. heroku git:remote  - a s40923148(自己的) \xa0( 針對已經登入的 Heroku 帳號下的 s40923148 app, 設為此倉儲的 remote 同步倉儲 \n 4. git add . \n 5.git commit -am "make it better" \n 6.git push heroku  \n \n \n 編輯器設定 \n path=%Disk%:;%path_python%;%path_portablegit%;%path_heroku%;%path%; \n 路近加上Heroku \n \xa0set path_heroku=%Disk%:\\heroku\\bin; \n 標示路徑 \n \n \n \n 再次教學如何設定SSH跟解釋 \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': '開始分組報告，要負責把一個github的倉儲推送去heroku，內容要包括機械設計系大樓教室的課表，可以的話把各個樓層都放上按鈕。 \n 教務主機查詢電腦輔助設計室排課時間表的python介紹 \n \n', 'tags': '', 'url': 'w8.html'}, {'title': 'Heroku', 'text': '1.創新的Heroku，不能用已經推送過的，不然會一直錯誤。 \n 2.創新的Github，然後把 \xa0 Procfile , \xa0 requirements.txt \xa0 與 \xa0 runtime.txt , \xa0，都推送上去。 \n 3.設定wsgi.py(負責打開6~9樓教室課表)(最下面) \n 4.最後就是推送， Github跟Heroku，(打開Heroku網址後在網址後加上? classroomno  =   BGAxxxx可改變教室) \n \n import requests\nimport bs4\n# for os.environ and os.system\nimport os\n# for geting html file path\nimport pathlib\n# 以下因應改為 Heroku based 程式所需導入模組,  修改步驟 1/6\nfrom flask import Flask, request \nfrom flask_cors import CORS\n \n \n# 修改步驟 2/6 , 加入 Flask 相關物件設定\napp = Flask(__name__)\n# 此一設定可以讓程式跨網域擷取資料\nCORS(app)\n \n# for pythn 3.9,  在近端測試時仍需要設定 proxy, 若使用 Python 3.8 執行則會自動使用系統的 Proxy 設定\nproxy = \'http://[2001:288:6004:17::69]:3128\'\n \nos.environ[\'http_proxy\'] = proxy \nos.environ[\'HTTP_PROXY\'] = proxy\nos.environ[\'https_proxy\'] = proxy\nos.environ[\'HTTPS_PROXY\'] = proxy\n\'\'\'\nurl:  \'jclassroom_ajax.php\',\ndata: { pselyr: pselyr, pselclssroom: pselclssroom },\n\'\'\'\n \n# 修改步驟 3/6, 試著將程式改為網際模式, 需要套用 Flask 的網際 decorator\n@app.route(\'/\')\ndef timeTableList():\n    semester = \'1092\'\n    classroomno = \'BGA0810\'\n    column = True\n \n    if semester == None:\n        semester = \'1092\'\n    if classroomno == None:\n        # BGA0810 電腦輔助設計室\n        classroomno = \'BGA0810\'\n         \n    headers = {\'X-Requested-With\': \'XMLHttpRequest\'}\n \n    url = \'https://qry.nfu.edu.tw/jclassroom_ajax.php\'\n    post_var = {\'pselyr\': semester, \'pselclssroom\': classroomno}\n \n    result = requests.post(url, data = post_var, headers = headers)\n \n    soup = bs4.BeautifulSoup(result.content, \'lxml\')\n \n    # 先除掉所有 anchor\n    for a in soup.findAll(\'a\'):\n        # bs3 語法\n        #a.replaceWithChildren()\n        # bs4 語法, 將標註與內容拆開\n        a.unwrap()\n \n    # 根據輸出設定, 取出 class=\'tbcls\' 的 table 資料\n    table = soup.find(\'table\', {\'class\': \'tbcls\'})\n \n    # 重建 table, 設定邊線為 1 pixel\n    output = "<table border=\'1\'>"\n \n    for i in table.contents:\n        # 利用 replace 復原  \n        output += str(i).replace("\xa0", " ")\n    output += "</table>"\n    #print(output)\n    # 修改步驟 5/6 , 因為已經將原先可列印出程式的步驟改為 function, 因此必須以 return 將擷取到的網頁資料傳回\n    return output\n     \n# 修改步驟 4/6 , 因為改寫為網際程式後, 下列將內容存檔並自動呼叫 Firefox 的程式碼不再適用, 必須蓋掉\n\'\'\'\n# 將 output 寫入 w1_classroom.html\nfileName = "w1_classroom.html"\nwith open(fileName, "w", encoding="utf-8") as file:\n    file.write(output)\n# 利用 os.system() 以 default browser 開啟 w1_class_local.html\nfilePath = pathlib.Path(__file__).parent.absolute()\n#print(filePath)\n# set firefox as default browser and start url to open html file\nos.system("start file:///" + str(filePath) + "\\\\" + fileName)\n\'\'\'\n \n# 修改步驟 6/6, 配合網際程式啟動,  以及 Python 程式執行與納入其他程式執行的特定進行配置\n \nif __name__ == \'__main__\':\n    app.run(host=\'127.0.0.1\', port=8080, debug=True)\n \n', 'tags': '', 'url': 'Heroku.html'}]};