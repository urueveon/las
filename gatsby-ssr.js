import React from 'react';

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  if (process.env.NODE_ENV === `production`) {
    return setHeadComponents([
      <script
        key={`gatsby-onesignal`}
        dangerouslySetInnerHTML={{
          __html: `
            <script type="text/javascript">
            var OneSignal = window.OneSignal || [];
            OneSignal.push(function() {
                OneSignal.init({
                  appId: "e99d79a5-fc67-4a4a-8203-4fd24afd6d73",
                });
            </script>
            <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
            `
        }}
      />
    ]);
  }
};
