package com.imed;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.github.wuxudong.rncharts.MPAndroidChartPackage;
import com.reactNativeQuickActions.AppShortcutsPackage;
import com.beefe.picker.PickerViewPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.RNFetchBlob.RNFetchBlobPackage;

import io.realm.react.RealmReactPackage;

import com.oblador.vectoricons.VectorIconsPackage;

import org.wonday.pdf.RCTPdfView;

import com.RNFetchBlob.RNFetchBlobPackage;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.asList(
                    new MainReactPackage(),
            new MPAndroidChartPackage(),
            new AppShortcutsPackage(),
            new PickerViewPackage(),
            new RNDeviceInfo(),
            new RNFetchBlobPackage(),
                    new RealmReactPackage(),
                    new VectorIconsPackage(),
                    new RCTPdfView(),
                    new RNFetchBlobPackage(),
                    new RCTCameraPackage(),
                    new MVWReactPackage()
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
