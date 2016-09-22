package com.helloworld;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.helloworld.extension.ExtensionPackage;

import java.util.Arrays;
import java.util.List;

import javax.annotation.Nullable;

import cn.reactnative.modules.update.UpdateContext;
import cn.reactnative.modules.update.UpdatePackage;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        protected boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new UpdatePackage(),
                    new ExtensionPackage()
            );



        }


        @Nullable
        @Override
        /**
         * Path to the JS bundle file to be loaded from the file system.
         *
         * Example: {@code "assets://index.android.js" or "/sdcard/main.jsbundle}
         */
        protected String getJSBundleFile() {
            return UpdateContext.getBundleUrl(MainApplication.this);
        }

        @Nullable
        @Override
        protected String getBundleAssetName() {
            return "index.android.jsbundle";
        }
    };


    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }
}
