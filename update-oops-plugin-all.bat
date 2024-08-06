md extensions
cd extensions

IF EXIST oops-plugin-bundle (
goto update
) ELSE (
goto clone
)

:clone
git clone -b master https://gitee.com/dgflash/oops-plugin-bundle.git

:update
cd oops-plugin-bundle
git pull

cd ../

IF EXIST oops-plugin-excel-to-json (
goto update
) ELSE (
goto clone
)

:clone
git clone -b master https://gitee.com/dgflash/oops-plugin-excel-to-json.git

:update
cd oops-plugin-excel-to-json
git pull

cd ../

IF EXIST oops-plugin-framework (
goto update
) ELSE (
goto clone
)

:clone
git clone -b master https://gitee.com/dgflash/oops-plugin-framework.git

:update
cd oops-plugin-framework
git pull

cd ../

IF EXIST oops-plugin-framework-tools (
goto update
) ELSE (
goto clone
)

:clone
git clone -b master https://gitee.com/dgflash/oops-plugin-framework-tools.git

:update
cd oops-plugin-framework-tools
git pull

cd ../

IF EXIST oops-plugin-hot-update (
goto update
) ELSE (
goto clone
)

:clone
git clone -b master https://gitee.com/dgflash/oops-plugin-hot-update.git

:update
cd oops-plugin-hot-update
git pull