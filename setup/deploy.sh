# add the environment variables
if [ -z $PINCUSH_LOCAL ] || [ -z $PINCUSH_REMOTE ] || [ -z $PINCUSH_REMOTE_PEM ] || [ -z $PINCUSH_REMOTE_HOST ]
then
  echo "########################################"
  echo "pcdep (pincushion deploy) issue: "
  echo "the following environment variables must"
  echo "be set:"
  echo "PINCUSH_LOCAL PINCUSH_REMOTE PINCUSH_REMOTE_PEM PINCUSH_REMOTE_HOST"
  echo "########################################"
  return 1
fi

pcdep () {
  rsync -rv -e "ssh -i ~/.ssh/mongodb_ec2.pem" --exclude-from $PINCUSH_LOCAL/setup/deployExclude.txt $PINCUSH_LOCAL/ $PINCUSH_REMOTE_HOST:$PINCUSH_REMOTE
}