#!/bin/bash

file=hello
count=0;

if [[ ! -e $file ]];then
  echo "${file}"不存在
else
  echo "${file} 已存在"
  index=1;
  while [[ -e  ${file}.${index}  ]]
  do
        echo "${file}.${index}已存在"
        ((index=index+1))
  done
  echo "创建一个新的文件夹"
  mkdir -p  ${file}.${index}
  ls |grep hello
fi

