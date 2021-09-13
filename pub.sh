###
 # @Author: your name
 # @Date: 2021-09-09 15:46:08
 # @LastEditTime: 2021-09-09 15:47:24
 # @LastEditors: Please set LastEditors
 # @Description: In User Settings Edit
 # @FilePath: /cli-test/package/pub.sh
### 
VERSION=`npx select-version-cli`
read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "Releasing $VERSION ..."
    npm version $VERSION
    npm publish
else 
npm publish
fi