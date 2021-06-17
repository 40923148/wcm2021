var tipuesearch = {"pages": [{'title': 'First', 'text': '\n', 'tags': '', 'url': 'First.html'}, {'title': '期中報告', 'text': '期中報告 \n 組長:張煒中 \n 組員:周玥辰，方冠勛，吳定隆，周育德，張智程 \n \n 綜一館 6F-9F 各實習實驗室的相關按鈕 \n \n \n \n 樓層 \n \xa0第一間 \n \xa0第二間 \n \xa0第三間 \n \xa0第四間 \n 第五間 \n \xa0第六間 \n \n \n 9 F \n  BGA0901 (國際會議廳)  \n \xa0  BGA0911 (機電實驗室)  \n \xa0  BGA0933 (系統晶片設計實驗室)  \n \xa0 \n \n \xa0 \n \n \n 8 F \n  BGA0810 (電腦輔助設計室) \n  BGA0820 (智慧感測與致動實驗室)  \n \n BGA0823 (新產品創意設計中心) \n \n BGA0830 (電腦輔助繪圖室) \n  BGA0842 (機械元件設計實驗室)  \n \n \n \n 7 F \n  BGA0710 (研討室(二)) \n \n BGA0730 (研討室(一))  \n \xa0 \n \n \xa0  BGA0760 (逆向快速成型實驗室)  \n \n \n 6 F \n  BGA0611 (研討室(三)) \n BGA0620 (動態系統實驗室)  \n \n  BGA0640 (創意設計室) \n \n \xa0 \n \n \n \n  程式碼:  https://github.com/40923148/nfulist \n heroku: https://s40923148.herokuapp.com/content/index.html \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0  https://a40923148.herokuapp.com/ \n gitlab: https://40923148.gitlab.io/wcm2021/content/index.html \n \n', 'tags': '', 'url': '期中報告.html'}, {'title': '教學影片', 'text': '', 'tags': '', 'url': '教學影片.html'}, {'title': 'OBS', 'text': '', 'tags': '', 'url': 'OBS.html'}, {'title': 'About', 'text': 'This is  https://github.com/mdecourse/cmstemplate \n 網際內容管理 (Web-based Content Management) \n 利用瀏覽器作為前端, 並將數位內容有系統地送到雲端伺服器中進行管理與運用的架構即稱為網際內容管理. \n 從機械設計專業的角度看待網際內容管理. \n 機械設計工程師應該從 CAD 出發透過零組件系統建立, 模擬與控制, 並在流程中利用 CAE 進行設計功能確認後, 將所有持續改進的內容透過分散式版次與網際管理系統進行保存與數位資料再利用. \n', 'tags': '', 'url': 'About.html'}, {'title': '語法', 'text': 'cms \n 老師為了同學方便把cd cmsimde\xa0 跟wsgi.py整合在一起，讓同學可以在自己的倉儲直接打開動態網頁。 \n acp \n 老師把git add .、git commit -m 、git push整合，讓同學可以直接推送，但要注意沒有把這次推送加上代號可能會出錯。 \n wsgi.py \n 打開動態網頁 \n git add\xa0. \n 找尋更新的內容 \n git commit -m \n 把更新的內容變成一個專案，記得要加上代號 \n git push \n 把全部的東西推送到遠端 \n path \n 路徑 \n dir \n 磁碟內容 \n regedit \n 登入編輯 \n git pull origin master  \n 更新到最新的資料 \n git clone (github網址).git \n 把 github倉儲複製到資料夾，以git形式 \n \n', 'tags': '', 'url': '語法.html'}, {'title': '上課內容', 'text': '', 'tags': '', 'url': '上課內容.html'}, {'title': 'w1', 'text': '還未選課沒上到課 \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w2', 'text': '更改標題 \n \xa0 cmsimde 編輯及轉靜態網頁有關的認知 \n', 'tags': '', 'url': 'w2.html'}, {'title': 'w3', 'text': '改版 \n 我上課時要改成最新版結果失敗了，詢問老師後，好像是我有弄壞一部份的靜態，需要從遠端重新抓新的下來，下課後抽時間重新抓了一次，然後又把up_dir資料夾更新，這次沒有跑一大堆錯誤出來，但我看資料夾並沒有上課所說的五個檔案，需要星期四上課再去詢問老師。 \n', 'tags': '', 'url': 'w3.html'}, {'title': 'w4', 'text': '成功的把上禮拜失敗的改版完成了，原因是，git pull指令無法被接受，需要指定哪個檔案(遠端的分支)。 \n 課表原始碼介紹利用和開啟各個課表的方法(更改那些變數，和必要的變數),回去用ssh跟github連線 \n 回家後測試使用SSH，結果失敗了，尋找錯誤的方法中。....... \n', 'tags': '', 'url': 'w4.html'}, {'title': 'w5', 'text': '今天老師上課教我們更新cmsimde，跟如何設定SSH，也讓我知道握哪裡設定錯誤，是之前的錯誤，教學完後還有太多人不懂所以我就去幫同學解決他們發生錯誤的地方 \n', 'tags': '', 'url': 'w5.html'}, {'title': 'SSH', 'text': '1.首先我們需要登入github在自己的帳號中開啟設定，在設定中尋找SSH and GPG keys ，然後先按New SSHkey做準備。 \n 2.在 start_ipv6.bat (編輯器)加入 \xa0 set GIT_SSH=%Disk%:\\putty\\plink.exe。 \n 3.開啟 Putty 目錄中的 puttygen.exe,(沒有putty從a.kmol.info:88下載)，點擊Generate下載新Key(移動滑鼠進度條才會動)，最上面出現的亂碼為新鑰匙，全選後丟進剛剛在github預備的New SSHkey(記得存)，記得用SciTE 編輯儲存鑰匙(_rsa 檔)，然後用Save private key再存一次(.ppk檔)，兩個檔案存在tmp/keys裡 \n 4.開啟 putty.exe建立一個 session用於以 ssh 協定連線到 github.com(在hostname),名稱可任意但Proxy須設定學校的(筆電不用Proxy可以選None)，Auth記得選之前儲存.ppk的檔案，最後回開頭存檔 \n 5.最後則是要修改tmp/wcm2021/.git裡面config的url(之前的可在前面加#即可)，url改成git@( session的名子) :(帳號)/(倉儲名子).git(原url下面)(是origin下面的url) \n 名子盡量相同會增加成功率，失敗就多試幾次說不定會成功 \n \n', 'tags': '', 'url': 'SSH.html'}, {'title': 'W6', 'text': '今天老師說了SSH的原理嚷我更加了解SSH的運作方式，雖然我依舊不明白相同的動作，有時候會設定成功有時候不行的原因是甚麼。 \n 還有註冊heroku跟把 a.kmol.info:88 的heroku.7z解壓縮到data裡面，在設定 \xa0start_ipv6.bat (編輯器)heroku的路徑，之後要教得因為時間問題延到下禮拜(Github連結heroku的方法) \n', 'tags': '', 'url': 'W6.html'}, {'title': 'w7', 'text': '開始準備期中分組報告 \n heroku連結到倉儲，需要 \n 從a.kmol.info:88下載Heroku，放到data下，再用編輯器把啟動器的Heroku路徑打上。 \n 測試是否有連接上， 輸入 heroku version，有出現版本號便成。 \n 未出現原因 \n 1.編輯器未編寫正確 \n 2.檔案不完整 \n 完成後推送方法 \n 1. heroku login  - i\xa0 ( 以 interactive 模式登入 Heroku)(記得打帳號密碼) \n 2cd到要推送得倉儲 \n 3. heroku git:remote  - a s40923148(自己的) \xa0( 針對已經登入的 Heroku 帳號下的 s40923148 app, 設為此倉儲的 remote 同步倉儲 \n 4. git add . \n 5.git commit -am "make it better" \n 6.git push heroku  \n \n \n 編輯器設定 \n path=%Disk%:;%path_python%;%path_portablegit%;%path_heroku%;%path%; \n 路近加上Heroku \n \xa0set path_heroku=%Disk%:\\heroku\\bin; \n 標示路徑 \n 學校電腦需要 \n REM  for   heroku login \n set HTTP_PROXY=http: //[2001:288:6004:17::53]:3128 \n set HTTPS_PROXY=http: //[2001:288:6004:17::53]:3128 \n \n \n \n 再次教學如何設定SSH跟解釋 \n', 'tags': '', 'url': 'w7.html'}, {'title': 'w8', 'text': '開始分組報告，要負責把一個github的倉儲推送去heroku，內容要包括機械設計系大樓教室的課表，可以的話把各個樓層都放上按鈕。 \n 教務主機查詢電腦輔助設計室排課時間表的python介紹 \n \n', 'tags': '', 'url': 'w8.html'}, {'title': 'Heroku', 'text': '1.創新的Heroku，不能用已經推送過的，不然會一直錯誤。 \n 2.創新的Github，然後把 \xa0 Procfile , \xa0 requirements.txt \xa0 與 \xa0 runtime.txt , \xa0，都推送上去。 \n 3.設定wsgi.py(負責打開6~9樓教室課表)(最下面) \n 4.最後就是推送， Github跟Heroku，(打開Heroku網址後在網址後加上? classroomno  =   BGAxxxx可改變教室) \n \n import requests\nimport bs4\n# for os.environ and os.system\nimport os\n# for geting html file path\nimport pathlib\n# 以下因應改為 Heroku based 程式所需導入模組,  修改步驟 1/6\nfrom flask import Flask, request \nfrom flask_cors import CORS\n \n \n# 修改步驟 2/6 , 加入 Flask 相關物件設定\napp = Flask(__name__)\n# 此一設定可以讓程式跨網域擷取資料\nCORS(app)\n \n# for pythn 3.9,  在近端測試時仍需要設定 proxy, 若使用 Python 3.8 執行則會自動使用系統的 Proxy 設定\nproxy = \'http://[2001:288:6004:17::69]:3128\'\n \nos.environ[\'http_proxy\'] = proxy \nos.environ[\'HTTP_PROXY\'] = proxy\nos.environ[\'https_proxy\'] = proxy\nos.environ[\'HTTPS_PROXY\'] = proxy\n\'\'\'\nurl:  \'jclassroom_ajax.php\',\ndata: { pselyr: pselyr, pselclssroom: pselclssroom },\n\'\'\'\n \n# 修改步驟 3/6, 試著將程式改為網際模式, 需要套用 Flask 的網際 decorator\n@app.route(\'/\')\ndef timeTableList():\n    semester = \'1092\'\n    classroomno = \'BGA0810\'\n    column = True\n \n    if semester == None:\n        semester = \'1092\'\n    if classroomno == None:\n        # BGA0810 電腦輔助設計室\n        classroomno = \'BGA0810\'\n         \n    headers = {\'X-Requested-With\': \'XMLHttpRequest\'}\n \n    url = \'https://qry.nfu.edu.tw/jclassroom_ajax.php\'\n    post_var = {\'pselyr\': semester, \'pselclssroom\': classroomno}\n \n    result = requests.post(url, data = post_var, headers = headers)\n \n    soup = bs4.BeautifulSoup(result.content, \'lxml\')\n \n    # 先除掉所有 anchor\n    for a in soup.findAll(\'a\'):\n        # bs3 語法\n        #a.replaceWithChildren()\n        # bs4 語法, 將標註與內容拆開\n        a.unwrap()\n \n    # 根據輸出設定, 取出 class=\'tbcls\' 的 table 資料\n    table = soup.find(\'table\', {\'class\': \'tbcls\'})\n \n    # 重建 table, 設定邊線為 1 pixel\n    output = "<table border=\'1\'>"\n \n    for i in table.contents:\n        # 利用 replace 復原  \n        output += str(i).replace("\xa0", " ")\n    output += "</table>"\n    #print(output)\n    # 修改步驟 5/6 , 因為已經將原先可列印出程式的步驟改為 function, 因此必須以 return 將擷取到的網頁資料傳回\n    return output\n     \n# 修改步驟 4/6 , 因為改寫為網際程式後, 下列將內容存檔並自動呼叫 Firefox 的程式碼不再適用, 必須蓋掉\n\'\'\'\n# 將 output 寫入 w1_classroom.html\nfileName = "w1_classroom.html"\nwith open(fileName, "w", encoding="utf-8") as file:\n    file.write(output)\n# 利用 os.system() 以 default browser 開啟 w1_class_local.html\nfilePath = pathlib.Path(__file__).parent.absolute()\n#print(filePath)\n# set firefox as default browser and start url to open html file\nos.system("start file:///" + str(filePath) + "\\\\" + fileName)\n\'\'\'\n \n# 修改步驟 6/6, 配合網際程式啟動,  以及 Python 程式執行與納入其他程式執行的特定進行配置\n \nif __name__ == \'__main__\':\n    app.run(host=\'127.0.0.1\', port=8080, debug=True)\n \n', 'tags': '', 'url': 'Heroku.html'}, {'title': 'w9', 'text': '自己為自己打分數，我為自己打75分，的原因是我覺得我有認真聽課有把老師交代的作業做完，不懂還特別去找同學請教，相反別人不懂我也有盡心幫忙。 \n 上台報告，由於我沒做簡報，所以我拿github的倉儲來做報告，因為上面只有我平時對上課的紀錄，跟中老師要求要做的東西，並沒有加以排版所以我報告的十分糟糕。 \n', 'tags': '', 'url': 'w9.html'}, {'title': 'W10\xa0 W11', 'text': '生病請病假 \n', 'tags': '', 'url': 'W10\xa0 W11.html'}, {'title': 'w12', 'text': '突然生病後兩個禮拜來上課，完全不懂老師在說甚麼，robodk、虛擬網站、FileZillaPortable、Oracle VM VirtualBox一大堆不明白的東西進入腦子，只能勉強記憶下來，回去再好好消化。 \n 回去想辦法處理robodk看了影片還是完全不懂，只好求助同學跟私訊老師，而虛擬網站之後的只是更加糟糕。 \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '出了一樣作業用python來操作robodk。 \n \n 第一題 \n Pick and Place 檔案下載 \n 1.可攜程式系統的命令列視窗輸入 (pip install robodk) 要連結robodk \n 2.開啟robodk(記得要前往 工具/選項/其他/打勾允許外部API並且輸入目前電腦網路IP \n ip查詢:ipconfig /all \n 3.pick_and_place (題目資料夾)\xa0 除程式碼(.py)都拉近robodk \n 4.Python-robodk-Install.baty在SCITE啟動\xa0 (檔案在RObodk裡) \n :: cd Python\n\n:: Install RoboDK API\npython.exe -m pip install  "./Python/." -I\n\n:: Install pylint (linting for VScode)\npython.exe -m pip install "pylint>=2.3" --retries=2\n\n:: Install rope (easy variable renaming in VScode)\npython.exe -m pip install "rope>=0.14" --retries=2\n\n:: Display all installed packages\npython.exe Python_Versions.py\n\npause \n 5.pick_and_place.py用SCITE啟動(啟動前注意ip有沒有出錯)(題目資料夾) \n # KMOLab Portable RoboDK pick and place\nfrom robolink import *    # API to communicate with robodk\nfrom robodk import *      # robodk robotics toolbox\n\n# Setup global parameters\nBALL_DIAMETER = 100 # diameter of one ball\nAPPROACH = 100      # approach distance to grab each part, in mm\nnTCPs = 6           # number of TCP\'s in the tool\n\n#----------------------------------------------\n# Function definitions\n\ndef box_calc(BALLS_SIDE=4, BALLS_MAX=None):\n    """Calculate a list of points (ball center) as if the balls were stored in a box"""\n    if BALLS_MAX is None: BALLS_MAX = BALLS_SIDE**3\n    xyz_list = []\n    for h in range(BALLS_SIDE):\n        for i in range(BALLS_SIDE):\n            for j in range(BALLS_SIDE):\n                xyz_list = xyz_list + [[(i+0.5)*BALL_DIAMETER, (j+0.5)*BALL_DIAMETER, (h+0.5)*BALL_DIAMETER]]\n                if len(xyz_list) >= BALLS_MAX:\n                    return xyz_list\n    return xyz_list\n\ndef pyramid_calc(BALLS_SIDE=4):\n    """Calculate a list of points (ball center) as if the balls were place in a pyramid"""\n    #the number of balls can be calculated as: int(BALLS_SIDE*(BALLS_SIDE+1)*(2*BALLS_SIDE+1)/6)\n    BALL_DIAMETER = 100\n    xyz_list = []\n    sqrt2 = 2**(0.5)\n    for h in range(BALLS_SIDE):\n        for i in range(BALLS_SIDE-h):\n            for j in range(BALLS_SIDE-h):\n                height = h*BALL_DIAMETER/sqrt2 + BALL_DIAMETER/2\n                xyz_list = xyz_list + [[i*BALL_DIAMETER + (h+1)*BALL_DIAMETER*0.5, j*BALL_DIAMETER + (h+1)*BALL_DIAMETER*0.5, height]]\n    return xyz_list\n\ndef balls_setup(frame, positions):\n    """Place a list of balls in a reference frame. The reference object (ball) must have been previously copied to the clipboard."""\n    nballs = len(positions)\n    step = 1.0/(nballs - 1)\n    for i in range(nballs):\n        newball = frame.Paste()\n        newball.setName(\'ball \' + str(i)) #set item name\n        newball.setPose(transl(positions[i])) #set item position with respect to parent\n        newball.setVisible(True, False) #make item visible but hide the reference frame\n        newball.Recolor([1-step*i, step*i, 0.2, 1]) #set RGBA color\n\ndef cleanup_balls(parentnodes):\n    """Delete all child items whose name starts with \\"ball\\", from the provided list of parent items."""\n    todelete = []\n    for item in parentnodes:\n        todelete = todelete + item.Childs()\n\n    for item in todelete:\n        if item.Name().startswith(\'ball\'):\n            item.Delete()\n\ndef TCP_On(toolitem, tcp_id):\n    """Attach the closest object to the toolitem Htool pose,\n    furthermore, it will output appropriate function calls on the generated robot program (call to TCP_On)"""\n    toolitem.AttachClosest()\n    toolitem.RDK().RunMessage(\'Set air valve %i on\' % (tcp_id+1))\n    toolitem.RDK().RunProgram(\'TCP_On(%i)\' % (tcp_id+1));\n        \ndef TCP_Off(toolitem, tcp_id, itemleave=0):\n    """Detaches the closest object attached to the toolitem Htool pose,\n    furthermore, it will output appropriate function calls on the generated robot program (call to TCP_Off)"""\n    toolitem.DetachAll(itemleave)\n    toolitem.RDK().RunMessage(\'Set air valve %i off\' % (tcp_id+1))\n    toolitem.RDK().RunProgram(\'TCP_Off(%i)\' % (tcp_id+1));\n\n\n#----------------------------------------------------------\n# The program starts here:\n\n# Any interaction with RoboDK must be done through RDK:\nRDK = Robolink(robodk_path="C:/robodk\\robodk522_portable/bin/RoboDK.exe", robodk_ip=\'192.168.1.111\')\n\n# Turn off automatic rendering (faster)\nRDK.Render(False)\n\n#RDK.Set_Simulation_Speed(500); # set the simulation speed\n\n# Gather required items from the station tree\nrobot = RDK.Item(\'Fanuc M-710iC/50\')\nrobot_tools = robot.Childs()\n#robottool = RDK.Item(\'MainTool\')\nframe1 = RDK.Item(\'Table 1\')\nframe2 = RDK.Item(\'Table 2\')\n\n# Copy a ball as an object (same as CTRL+C)\nballref = RDK.Item(\'reference ball\')\nballref.Copy()\n\n# Run a pre-defined station program (in RoboDK) to replace the two tables\nprog_reset = RDK.Item(\'Replace objects\')\nprog_reset.RunProgram()\n\n# Call custom procedure to remove old objects\ncleanup_balls([frame1, frame2])\n\n# Make a list of positions to place the objects\nframe1_list = pyramid_calc(4)\nframe2_list = pyramid_calc(4)\n\n# Programmatically place the objects with a custom-made procedure\nballs_setup(frame1, frame1_list)\n\n# Delete previously generated tools\nfor tool in robot_tools:\n    if tool.Name().startswith(\'TCP\'):\n        tool.Delete()\n        \n# Calculate tool frames for the suction cup tool of 6 suction cups\nTCP_list = []\nfor i in range(nTCPs):\n    TCPi_pose = transl(0,0,100)*rotz((360/nTCPs)*i*pi/180)*transl(125,0,0)*roty(pi/2)\n    TCPi = robot.AddTool(TCPi_pose, \'TCP %i\' % (i+1))\n    TCP_list.append(TCPi)\n\nTCP_0 = TCP_list[0]\n\n# Turn on automatic rendering\nRDK.Render(True)\n\n# Move balls    \nrobot.setPoseTool(TCP_list[0])\nnballs_frame1 = len(frame1_list)\nnballs_frame2 = len(frame2_list)\nidTake = nballs_frame1 - 1\nidLeave = 0\nidTCP = 0\ntarget_app_frame = transl(2*BALL_DIAMETER, 2*BALL_DIAMETER, 4*BALL_DIAMETER)*roty(pi)*transl(0,0,-APPROACH)\n\nwhile idTake >= 0:\n    # ------------------------------------------------------------------\n    # first priority: grab as many balls as possible\n    # the tool is empty at this point, so take as many balls as possible (up to a maximum of 6 -> nTCPs)\n    ntake = min(nTCPs, idTake + 1)\n\n    # approach to frame 1\n    robot.setPoseFrame(frame1)\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.MoveJ(target_app_frame)\n\n    # grab ntake balls from frame 1\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        # calculate target wrt frame1: rotation about Y is needed since Z and X axis are inverted\n        target = transl(frame1_list[idTake])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idTake = idTake - 1        \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_On(TCPi, i)\n        robot.MoveL(target_app)\n \n    # ------------------------------------------------------------------\n    # second priority: unload the tool     \n    # approach to frame 2 and place the tool balls into table 2\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ(target_app_frame)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.setPoseFrame(frame2)    \n    robot.MoveJ(target_app_frame)\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        if idLeave > nballs_frame2-1:\n            raise Exception("No room left to place objects in Table 2")\n        \n        # calculate target wrt frame1: rotation of 180 about Y is needed since Z and X axis are inverted\n        target = transl(frame2_list[idLeave])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idLeave = idLeave + 1        \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_Off(TCPi, i, frame2)\n        robot.MoveL(target_app)\n\n    robot.MoveJ(target_app_frame)\n\n# Move home when the robot finishes\nrobot.MoveJ([0,0,0,0,10,-200])\n \n \n', 'tags': '', 'url': 'w13.html'}, {'title': '第二題', 'text': 'pick and place final 專案下載 \n 1.關閉robodk(沒開就跳過) \n 2.Python-robodk-Install.baty在SCITE啟動\xa0 (檔案在RObodk裡) \n :: cd Python\n\n:: Install RoboDK API\npython.exe -m pip install  "./Python/." -I\n\n:: Install pylint (linting for VScode)\npython.exe -m pip install "pylint>=2.3" --retries=2\n\n:: Install rope (easy variable renaming in VScode)\npython.exe -m pip install "rope>=0.14" --retries=2\n\n:: Display all installed packages\npython.exe Python_Versions.py\n\npause \n 3.pick_and_place_using_python_api.py用SCITE啟動(注意路徑要改成電腦robodk真正的路徑) \n (題目資料夾) \n from robolink import *\nfrom robodk import *\n \nimport os\n \ndir_path = os.path.dirname(os.path.realpath(__file__))\nprint(dir_path)\n# Calculate pyramid coordinate\n \n# Setup global parameters\nBALL_DIAMETER = 100 # diameter of one ball\nAPPROACH = 100      # approach distance to grab each part, in mm\nnTCPs = 6           # number of TCP\'s in the tool\n \ndef pyramid_calc(BALLS_SIDE=4):\n    """Calculate a list of points (ball center) as if the balls were place in a pyramid"""\n    #the number of balls can be calculated as: int(BALLS_SIDE*(BALLS_SIDE+1)*(2*BALLS_SIDE+1)/6)\n    #BALL_DIAMETER = 100\n    xyz_list = []\n    sqrt2 = 2**(0.5)\n    for h in range(BALLS_SIDE):\n        for i in range(BALLS_SIDE-h):\n            for j in range(BALLS_SIDE-h):\n                height = h*BALL_DIAMETER/sqrt2 + BALL_DIAMETER/2\n                xyz_list = xyz_list + [[i*BALL_DIAMETER + (h+1)*BALL_DIAMETER*0.5, j*BALL_DIAMETER + (h+1)*BALL_DIAMETER*0.5, height]]\n    return xyz_list\n     \ndef TCP_On(toolitem, tcp_id):\n    """Attach the closest object to the toolitem Htool pose,\n    furthermore, it will output appropriate function calls on the generated robot program (call to TCP_On)"""\n    toolitem.AttachClosest()\n    toolitem.RDK().RunMessage(\'Set air valve %i on\' % (tcp_id+1))\n    toolitem.RDK().RunProgram(\'TCP_On(%i)\' % (tcp_id+1));\n         \ndef TCP_Off(toolitem, tcp_id, itemleave=0):\n    """Detaches the closest object attached to the toolitem Htool pose,\n    furthermore, it will output appropriate function calls on the generated robot program (call to TCP_Off)"""\n    toolitem.DetachAll(itemleave)\n    toolitem.RDK().RunMessage(\'Set air valve %i off\' % (tcp_id+1))\n    toolitem.RDK().RunProgram(\'TCP_Off(%i)\' % (tcp_id+1));\n \n# Make a list of positions to place the objects\nballs_list = pyramid_calc(4)\n \n#print(len(frame1_list))\n# 4*4 = 16\n# 3*3 = 9\n# 2*2 = 4\n# 1+4+9+16 = 30\n \n# height 50*sqrt(2)\n\'\'\'\n[\n \n[50.0, 50.0, 50.0], [50.0, 150.0, 50.0], [50.0, 250.0, 50.0], [50.0, 350.0, 50.0], \n \n[150.0, 50.0, 50.0], [150.0, 150.0, 50.0], [150.0, 250.0, 50.0], [150.0, 350.0, 50.0], \n \n[250.0, 50.0, 50.0], [250.0, 150.0, 50.0], [250.0, 250.0, 50.0], [250.0, 350.0, 50.0], \n \n[350.0, 50.0, 50.0], [350.0, 150.0, 50.0], [350.0, 250.0, 50.0], [350.0, 350.0, 50.0], \n \n \n[100.0, 100.0, 120.71067811865474], [100.0, 200.0, 120.71067811865474], [100.0, 300.0, 120.71067811865474], \n \n[200.0, 100.0, 120.71067811865474], [200.0, 200.0, 120.71067811865474], [200.0, 300.0, 120.71067811865474], \n \n[300.0, 100.0, 120.71067811865474], [300.0, 200.0, 120.71067811865474], [300.0, 300.0, 120.71067811865474], \n \n \n[150.0, 150.0, 191.42135623730948], [150.0, 250.0, 191.42135623730948], \n \n[250.0, 150.0, 191.42135623730948], [250.0, 250.0, 191.42135623730948], \n \n \n[200.0, 200.0, 262.13203435596427]\n \n]\n \n\'\'\'\n# https://github.com/RoboDK/RoboDK-API/blob/master/Python/robolink.py\n# robodk_path variable to specify location of RoboDK.exe\n# under Ubuntu can not use "-NEWINSTANCE"\n\'\'\'\nstart_robodk.sh content\nLD_LIBRARY_PATH="/home/yen/RoboDK/bin/lib"\nexport LD_LIBRARY_PATH\n/home/yen/RoboDK/bin/RoboDK\n\'\'\'\nRDK = Robolink(robodk_path=r"C:\\robodk\\robodk522_portable\\bin\\RoboDK.exe",args=["-SKIPINI", "-EXIT_LAST_COM"])\n# Add robot and the accompanied Base coordinate\nprint(dir_path + \'/Fanuc-M-710iC-50.robot\')\n# relative directory or absolute directory will work for AddFile under Ubuntu\n#robot = RDK.AddFile(r"/home/yen/github/wcm2021/downloads/robodk/pick_and_place_kmol_mac/Fanuc-M-710iC-50.robot")\nrobot = RDK.AddFile(\'Fanuc-M-710iC-50.robot\')\n# Get the default robot base frame\nrobot_frame = RDK.Item(\'Fanuc M-710iC/50 Base\')\n# Move the base frame to the origin\nrobot_frame.setPose(transl(0,0,0))\n \n# Add a tool to an existing robot:\ntool = RDK.AddFile(dir_path + \'/MainTool.tool\', robot)\n \n# Add table 1\ntable1_frame = RDK.AddFrame(\'Table 1\')\ntable1_frame.setPose(transl(807.766544,-963.699898,41.478944))\ntable1_stl = RDK.AddFile(dir_path + \'/Table.stl\', table1_frame)\n \n# Add table 2\ntable2_frame = RDK.AddFrame(\'Table 2\')\ntable2_frame.setPose(transl(926.465508,337.151529,94.871928))\ntable2_stl = RDK.AddFile(dir_path + \'/Table.stl\', table2_frame)\n      \n# Calculate tool frames for the suction cup tool of 6 suction cups\nTCP_list = []\nfor i in range(nTCPs):\n    TCPi_pose = transl(0,0,100)*rotz((360/nTCPs)*i*pi/180)*transl(125,0,0)*roty(pi/2)\n    TCPi = robot.AddTool(TCPi_pose, \'TCP %i\' % (i+1))\n    TCP_list.append(TCPi)\n \nTCP_0 = TCP_list[0]\n \n# Turn on automatic rendering\nRDK.Render(True)\n \n# Add balls\n# create a list with 30 elements\nballs = [None for _ in range(30)]\nlayer = [16, 9, 4, 1]\ncount = 0\nfor i in range(len(balls_list)):\n    # transl(balls_list)\n    balls[i] = RDK.AddFile(\'./ball.stl\', table1_frame)\n    balls[i].setPose(transl(balls_list[i]))\n    count = count + 1\n    if count <= 16:\n        balls[i].setColor([1, 0, 0])\n    elif count > 16 and count <= 25:\n        balls[i].setColor([0, 1, 0])\n    elif count > 25 and count <=29:\n        balls[i].setColor([1, 1, 0])\n    else:\n        balls[i].setColor([0, 0, 1])\n \n# Make a list of positions to place the objects\n# ball_list is the same as frame1_list\nframe1_list = pyramid_calc(4)\nframe2_list = pyramid_calc(4)\n \n# Move balls \nrobot.setPoseTool(TCP_list[0])\nnballs_frame1 = len(frame1_list)\nnballs_frame2 = len(frame2_list)\nidTake = nballs_frame1 - 1\nidLeave = 0\nidTCP = 0\n \ntarget_app_frame = transl(2*BALL_DIAMETER, 2*BALL_DIAMETER, 4*BALL_DIAMETER)*roty(pi)*transl(0,0,-APPROACH)\n \n# frame1 is the same as table1_frame\nframe1 = RDK.Item(\'Table 1\')\nframe2 = RDK.Item(\'Table 2\')\n \nwhile idTake >= 0:\n    # ------------------------------------------------------------------\n    # first priority: grab as many balls as possible\n    # the tool is empty at this point, so take as many balls as possible (up to a maximum of 6 -> nTCPs)\n    ntake = min(nTCPs, idTake + 1)\n \n    # approach to frame 1\n    robot.setPoseFrame(frame1)\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.MoveJ(target_app_frame)\n \n    # grab ntake balls from frame1\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        # calculate target wrt frame1: rotation about Y is needed since Z and X axis are inverted\n        target = transl(frame1_list[idTake])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idTake = idTake - 1       \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_On(TCPi, i)\n        robot.MoveL(target_app)\n  \n    # ------------------------------------------------------------------\n    # second priority: unload the tool     \n    # approach to frame2 and place the tool balls into table2\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ(target_app_frame)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.setPoseFrame(frame2)    \n    robot.MoveJ(target_app_frame)\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        if idLeave > nballs_frame2-1:\n            raise Exception("No room left to place objects in Table 2")\n \n        # calculate target wrt frame1: rotation of 180 about Y is needed since Z and X axis are inverted\n        target = transl(frame2_list[idLeave])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idLeave = idLeave + 1       \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_Off(TCPi, i, frame2)\n        robot.MoveL(target_app)\n \n    robot.MoveJ(target_app_frame)\n \n# Move home when the robot finishes\nrobot.MoveJ([0,0,0,0,10,-200]) \n \n', 'tags': '', 'url': '第二題.html'}, {'title': 'w14', 'text': 'wcm2021-ag1   40923135 web  |  40923135 repo  |  grp web  |  grp repo     40923108 web  |  40923108 repo  |  grp web  |  grp repo     40923101 web  |  40923101 repo  |  grp web  |  grp repo     40923142 web  |  40923142 repo  |  grp web  |  grp repo    wcm2021-ag2   40923105 web  |  40923105 repo  |  grp web  |  grp repo     40923104 web  |  40923104 repo  |  grp web  |  grp repo     40923107 web  |  40923107 repo  |  grp web  |  grp repo     40923110 web  |  40923110 repo  |  grp web  |  grp repo     40923102 web  |  40923102 repo  |  grp web  |  grp repo     40923106 web  |  40923106 repo  |  grp web  |  grp repo    wcm2021-ag3   40923123 web  |  40923123 repo  |  grp web  |  grp repo     40923151 web  |  40923151 repo  |  grp web  |  grp repo     40923139 web  |  40923139 repo  |  grp web  |  grp repo     40923147 web  |  40923147 repo  |  grp web  |  grp repo    wcm2021-ag4   40923148 web  |  40923148 repo  |  grp web  |  grp repo     40923111 web  |  40923111 repo  |  grp web  |  grp repo     40923116 web  |  40923116 repo  |  grp web  |  grp repo     40923122 web  |  40923122 repo  |  grp web  |  grp repo     40923109 web  |  40923109 repo  |  grp web  |  grp repo     40923146 web  |  40923146 repo  |  grp web  |  grp repo    wcm2021-ag5   40923127 web  |  40923127 repo  |  grp web  |  grp repo     40923128 web  |  40923128 repo  |  grp web  |  grp repo     40923125 web  |  40923125 repo  |  grp web  |  grp repo     40923136 web  |  40923136 repo  |  grp web  |  grp repo     40923124 web  |  40923124 repo  |  grp web  |  grp repo     40923126 web  |  40923126 repo  |  grp web  |  grp repo    wcm2021-ag6   40723240 web  |  40723240 repo  |  grp web  |  grp repo     40723238 web  |  40723238 repo  |  grp web  |  grp repo    wcm2021-ag7   40523923 web  |  40523923 repo  |  grp web  |  grp repo     40523148 web  |  40523148 repo  |  grp web  |  grp repo    wcm2021-ag8   40923117 web  |  40923117 repo  |  grp web  |  grp repo     40923120 web  |  40923120 repo  |  grp web  |  grp repo     40923119 web  |  40923119 repo  |  grp web  |  grp repo    wcm2021-ag9  wcm2021-ag10 \n', 'tags': '', 'url': 'w14.html'}, {'title': '教學-1', 'text': '1.fork使自己有組長倉儲 \n 2.git pull\xa0 更新倉儲內容 \n 3 Create pull request\xa0 推回組長那邊 \n \n 1.修改 \n # stage3_gen_html.py\nstudList = "stage3_2a.txt"\ncourTitle = "cd2021"\n\n# group title initial\ngrpTitle = studList[:6] + "-" + studList[8] + "g"\n\n# student Account and github Account as inputs\ndef perWeb(s, g):\n    pSite = "<a href=\\"https://" + g + ".github.io/" + courTitle + "\\">" + s + " web</a>"\n    print(pSite)\n\ndef perRepo(s, g):\n    pSite = "<a href=\\"https://github.com/" + g + "/" + courTitle + "\\">" + s + " repo</a>"\n    print(pSite)\n    \ndef grpWeb(s, g, ord):\n    pSite = "<a href=\\"https://" + g + ".github.io/" + grpTitle + str(ord) + "\\">grp web</a>"\n    print(pSite)\n    \ndef grpRepo(s, g, ord):\n    pSite = "<a href=\\"https://github.com/" + g + "/" + grpTitle + str(ord) + "\\">grp repo</a>"\n    print(pSite)\n\n# open file, default is read mode, since txt content no chinese char\n# no encoding = "UTF-8" is needed\nwith open(studList) as fh:\n    # readlines will read into the whole line and put into list format\n    # has \\n at the end of each line\n    data = fh.readlines()\n\ngrpCount = 0\nfor i in range(len(data)):\n    # grpCount is the group order\n    grpCount = grpCount + 1\n    group = data[i].rstrip("\\n").split("\\t")\n    # use filter to remove vacant string element\n    # use [1:] to remove first element\n    group = list(filter(None, group))[1:]\n    print(grpTitle + str(grpCount) + "<br />")\n    for j in range(0, len(group), 2):\n        # s is the student number\n        s = group[j]\n        # g is the github account\n        g = group[j+1]\n        perWeb(s, g)\n        print("|")\n        perRepo(s, g)\n        print("|")\n        grpWeb(s, g, grpCount)\n        print("|")\n        grpRepo(s, g, grpCount)\n        print("<br />") \n 2.複製表單 \n stage3_ag1\t40823131\t40823131\t40823112\ta40823112\t40823123\t40823123\t40823145\t40823145\t40823136\t40823136\t40823109\t40823109\t40823116\t40823116\t40823108\t40823108\nstage3_ag2\t40823151\t40823151\t40623121\t40623121\t40871106\t40871106\t40823102\t40823102\t40823104\t40823104\t40823106\t40823106\t40823101\t40823101\t40823132\t40823132\nstage3_ag3\t40823119\t40823119\t40823150\t40823150\t40823103\t40823103\t40823107\t40823107\t40523252\t40523252\t40823154\t40823154\t\t\t\t\nstage3_ag4\t40823142\t40823142\t40823144\t40823144\t40823127\t40823127\t40823148\t40823148\t40823121\t40823121\t40823135\t40823135\t40823114\t40823114\t40823146\t40823146\nstage3_ag5\t40823111\t40823111\t40823115\t40823115\t40823128\t40823128\t40823120\t40823120\t40823140\t40823140\t40823124\t40823124\t40823139\t40823139\t40823126\t40823126\nstage3_ag6\t40823152\t40823152\t40823110\t40823110\t40823122\t40823122\t40823125\t40823125\t40823117\t40823117\t40823129\t40823129\t40823149\t40823149\t40823153\t40823153 \n \n', 'tags': '', 'url': '教學-1.html'}, {'title': 'w15', 'text': '創建分組倉儲 \n 倉儲: https://40923148.github.io/wcm2021-ag4/content/index.html \n', 'tags': '', 'url': 'w15.html'}, {'title': 'w16', 'text': '將13~15周所做的事情推到 https://github.com/mdecourse/wcm2021/discussions/19 \n fossil倉儲設定 \n', 'tags': '', 'url': 'w16.html'}, {'title': '教學-2', 'text': '1.從老師郵件中登入fossil(用裡面附的密碼) \n 2.從wcm2021測試倉儲中創建自己的倉儲 \n 3.擁有自身倉儲後在tmp資料夾下建立倉儲資料夾 \n \xa0 \xa0會使用到以下指令 \n \xa0 \xa0(1)fossil clone https://409231xx@fossil.kmol.info/u/409231xx 409231xx.fossil(下載fossil\xa0 \xa0 \xa0 \xa0 \xa0 \xa0倉儲為連結做準備) \n \xa0 \xa0(2)fossil open ./../../40923148.fossil (連結fossil) \n \xa0 \xa0(3)mkdir (增新資料夾) \n \xa0 \xa0(4)git clone --recurse-submodules https://github.com/409231xx/wcm2021.git(下載github\xa0 \xa0 \xa0 \xa0 \xa0倉儲資料 \n \xa0 \xa0(5)fossil add . (fossil改版用 \n \xa0 \xa0(6)fossil commit -m "initial add"(fossil推送用 \n 4.正常推送倉儲 \n', 'tags': '', 'url': '教學-2.html'}, {'title': '作業', 'text': '16~18周功課布置 完成兩台 Heroku 平台上的虛擬主機 \n 主機一: 利用 Heroku 呈現靜態網頁內容. \n 此一網站必須包含個人學習心得, 上課過程的筆記, 以及下列各 H1 頁面, 其他 H2 與 H3 頁面由各學員視實際需要自行加入: \n 提示: 課程網頁中 與 Heroku 有關 的頁面. \n 標題為: \xa0 網路環境 \n 說明個人在線上課程階段, 所使用上網環境紀錄報告, 其中包括如何上網, 有哪些設定等. 完成後請將操作流程影片嵌入頁面. \n 標題為: \xa0 Heroku 網站 \n 說明如何透過上述網路環境與工具, 完成 Heroku CMSiMDE 靜態網頁的建立. 完成後請將操作流程影片嵌入頁面. \n 標題為: \xa0 網路直播 \n 說明如何透過線上 OBS + Youtube 進行直播, 過程中以那些設定與注意事項. 完成後請將操作流程影片嵌入頁面. \n 標題為: \xa0 RoboDK 執行 \n 說明曾經做過哪些與 RoboDK相關的練習, 過程中如何進行, 分別獲得那些心得? 完成後請將操作流程影片嵌入頁面. \n 主機二: Heroku Python 應用程式主機 \n 請在上述網頁中, 增加一個標題為" 動態網站 " 的 H1 頁面, 並且利用 CMSiMDE 建立一台動態網站主機. 完成後請在頁面附上所完成的主機連結, 並且將操作流程影片嵌入頁面. \n 提示: \xa0 https://nfulist.herokuapp.com \xa0 就是一台典型的 Python 應用程式主機. ( nfulist 原始碼 )', 'tags': '', 'url': '作業.html'}]};